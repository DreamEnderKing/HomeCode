using System.Diagnostics;
using System.Text;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.JSInterop;


namespace System.Drawing.Canvas
{
    #region Color
    public static class ColorCustom{
        public static String FromInt10ToInt16(int i) {
            i = Math.Abs(i);
            String result = "";
            char[] char16 = new char[]
                {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
            do
            {
                result = result + char16[i % 16];
                i = (i - i % 16) / 16;
            } while (i != 0);
            return result;
        }
    }
    public struct Color{
        public Color(int Red, int Green, int Blue, int Alpha)=>
            (r, g, b, a) = (Red, Green, Blue, Alpha);
        public static implicit operator Color((int, int, int, int)i) => new Color(i.Item1, i.Item2, i.Item3, i.Item4);
        public static implicit operator Color((int, int, int)i) => new Color(i.Item1, i.Item2, i.Item3, 255);
        public int r;
        public int g;
        public int b;
        public int a;
        public override string ToString() {
            string _r = ColorCustom.FromInt10ToInt16(r);
            string _g = ColorCustom.FromInt10ToInt16(g);
            string _b = ColorCustom.FromInt10ToInt16(b);
            _r = _r.Length == 2 ? _r : $"0{_r}";
            _g = _g.Length == 2 ? _g : $"0{_g}";
            _b = _b.Length == 2 ? _b : $"0{_b}";
            return $"#{_r}{_g}{_b}";
        }
    }
    public abstract class Brush{
        public async virtual Task Convey(IJSRuntime js,  bool type) {
            await js.InvokeVoidAsync("SetAlpha", Alpha);
        }
        public int Alpha = 255;
    }
    public sealed class SolidBrush : Brush {
        public Color Color;
        public SolidBrush(Color color) => (Color, Alpha) = (color, color.a);
        public override async Task Convey(IJSRuntime js,  bool type) {
            await js.InvokeVoidAsync("SetSolid", Color.ToString(), type);
            await base.Convey(js, type);
        }
    }
    public sealed class LinearGradientBrush : Brush {
        public LinearGradientBrush(Point p1, Point p2, params (double, Color)[] o) {
            (Point1, Point2) = (p1, p2);
            foreach(var i in o)
                Points.Add(i.Item1, i.Item2);
        }
        public Point Point1;
        public Point Point2;
        public Dictionary<double, Color> Points = new Dictionary<double, Color>();
        public override async Task Convey(IJSRuntime js,  bool type) {
            List<Object> l = new List<object>();
            foreach (var i in Points) {
                l.Add(i.Key);
                l.Add(i.Value.ToString());
            }
            await js.InvokeVoidAsync("SetLinearGradient", Point1.X, Point1.Y, Point2.X, Point2.Y, l.ToArray(), type);
            await base.Convey(js, type);
        }
    }
    public sealed class RadialGradientBrush : Brush {
        public RadialGradientBrush(Point p1, Point p2, params (double, Color)[] o) {
            (Point1, Point2) = (p1, p2);
            foreach(var i in o)
                Points.Add(i.Item1, i.Item2);
        }
        public Point Point1;
        public Point Point2;
        public Dictionary<double, Color> Points = new Dictionary<double, Color>();
        public override async Task Convey(IJSRuntime js,  bool type) {
            List<Object> l = new List<object>();
            foreach (var i in Points) {
                l.Add(i.Key);
                l.Add(i.Value.ToString());
            }
            await js.InvokeVoidAsync("SetLinearGradient", Point1.X, Point1.Y, Point2.X, Point2.Y, l.ToArray(), type);
            await base.Convey(js, type);
        }
    }

    public struct Point{
        public double X;
        public double Y;
        public Point(double x, double y) => (X, Y) = (x, y);
        public static implicit operator Point((double, double)i) => new Point(i.Item1, i.Item2);
    }
    public struct Size{
        public double X;
        public double Y;
        public Size(double x, double y) => (X, Y) = (x, y);
        public static implicit operator Size((double, double)i) => new Size(i.Item1, i.Item2);
    }
    #endregion

    #region Font
    public enum FontStyle{
        Normal, Italic, Oblique
    }
    public enum FontVariant{
        Normal, SmallCaps
    }
    public enum FontWeightCustom{
        Normal = 400,Bold = 700
    }
    public struct FontWeight{
        public int weight;
        public static implicit operator FontWeight(FontWeightCustom _weight) {
            FontWeight _new = new FontWeight();
            _new.weight = (int)_weight;
            return _new;
        }
        public static implicit operator FontWeight(int _weight) {
            FontWeight _new = new FontWeight();
            _new.weight = (int)_weight;
            return _new;
        }
    }
    public enum FontCustom{
        Caption, Icon, Menu, MessageBox, SmallCaption, StatuesBar
    }
    public class Font{
        public FontStyle FontStyle = FontStyle.Normal;
        public FontVariant FontVariant = FontVariant.Normal;
        public FontWeight FontWeight = FontWeightCustom.Normal;
        private bool isCustom = false;
        private FontCustom FontCustom;
        public Font(FontStyle style, FontVariant variant, FontWeight weight) => (FontStyle, FontVariant, FontWeight) = (style, variant, weight);
        public Font(FontStyle style, FontVariant variant, int weight) => (FontStyle, FontVariant, FontWeight) = (style, variant, weight);
        public Font(FontCustom custom) => (isCustom, FontCustom) = (true, custom);
        public override string ToString() {
            return isCustom?
                "{FontCustom}":
                "{FontStyle} {FontVarient} {FontWeight}";
        }
    }
    #endregion

    public class Canvas2D{
        #region Definite
        private IJSRuntime JS;
        private bool isInited = false;
        public bool isRadian = false;
        public void Init(IJSRuntime JSRuntime) {
            JS = JSRuntime;
            isInited = true;
        }
        [Conditional("TRACE")]
        public async void DebugWrite(string info) => JS.InvokeVoidAsync("DebugWrite", info);
        #endregion

        #region Simple Geometric Figure
        public async Task DrawRect(Point point, Size size, Brush brush) {
            await brush.Convey(JS, false);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateRect", point.X, point.Y, size.X, size.Y);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("StrokePath");
        }
        public async Task DrawCircle(Point point, Size size, Brush brush) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await brush.Convey(JS, false);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, 0, 2 * Math.PI);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("StrokePath");
        }
        public async Task DrawPie(Point point, Size size, Brush brush, double sAngle, double eAngle, bool clockwise = false) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            (sAngle, eAngle) = isRadian ? (sAngle, eAngle) : (sAngle / 180 * Math.PI, eAngle / 180 * Math.PI);
            await brush.Convey(JS, false);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, sAngle, eAngle, clockwise);
            await JS.InvokeVoidAsync("CreateLine", point.X + size.X / 2, point.Y + size.Y / 2);
            await JS.InvokeVoidAsync("CreateLine", point.X + size.X / 2 * (1 + Math.Cos(sAngle)), point.Y + size.Y / 2 * (1 - Math.Sin(sAngle)));
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("StrokePath");
        }
        public async Task DrawArc(Point point, Size size, Brush brush, double sAngle, double eAngle, bool clockwise = false) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await brush.Convey(JS, false);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, sAngle, eAngle, clockwise);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("StrokePath");
        }
        public async Task FillRect(Point point, Size size, Brush brush) {
            await brush.Convey(JS, true);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateRect", point.X, point.Y, size.X, size.Y);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("FillPath");
        }
        public async Task FillCircle(Point point, Size size, Brush brush) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await brush.Convey(JS, true);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, 0, 2 * Math.PI);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("FillPath");
        }
        public async Task FillPie(Point point, Size size, Brush brush, double sAngle, double eAngle, bool clockwise = false) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await brush.Convey(JS, true);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, sAngle, eAngle, clockwise);
            await JS.InvokeVoidAsync("CreateLine", point.X + size.X / 2, point.Y + size.Y / 2);
            await JS.InvokeVoidAsync("CreateLine", point.X + size.X / 2 * (1 + Math.Cos(sAngle)), point.Y + size.Y / 2 * (1 - Math.Sin(sAngle)));
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("FillPath");
        }
        public async Task FillArc(Point point, Size size, Brush brush, double sAngle, double eAngle, bool clockwise = false) {
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await brush.Convey(JS, false);
            await JS.InvokeVoidAsync("BeginPath");
            await JS.InvokeVoidAsync("CreateArc", point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, sAngle, eAngle, clockwise);
            await JS.InvokeVoidAsync("ClosePath");
            await JS.InvokeVoidAsync("FillPath");
        }
        #endregion
    }
}
