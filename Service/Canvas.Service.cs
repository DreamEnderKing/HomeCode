using System.Text;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.JSInterop;


namespace System.Drawing.Canvas
{
    public static class ColorCustom{
        public static String FromInt10ToInt16(int i){
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
    public class Color{
        public Color(int Red, int Green, int Blue, int Alpha)=>
            (r, g, b, a) = (Red, Green, Blue, Alpha);
        public int r;
        public int g;
        public int b;
        public int a;
    }
    public abstract class Brush{
        public abstract object Convey();
        public int Alpha;
    }
    public sealed class SolidBrush : Brush{
        public Color Color;
        public SolidBrush(Color color) => (Color, Alpha) = (color, color.a);
        public override object Convey() => "#" 
            + ((ColorCustom.FromInt10ToInt16(Color.r).Length == 2)? ColorCustom.FromInt10ToInt16(Color.r): "0" + ColorCustom.FromInt10ToInt16(Color.r))
            + ((ColorCustom.FromInt10ToInt16(Color.g).Length == 2)? ColorCustom.FromInt10ToInt16(Color.g): "0" + ColorCustom.FromInt10ToInt16(Color.g))
            + ((ColorCustom.FromInt10ToInt16(Color.b).Length == 2)? ColorCustom.FromInt10ToInt16(Color.b): "0" + ColorCustom.FromInt10ToInt16(Color.b));
    }
    public struct Point{
        public int X;
        public int Y;
        public Point(int x, int y) => (X, Y) = (x, y);
    }
    public struct Size{
        public int X;
        public int Y;
        public Size(int x, int y) => (X, Y) = (x, y);
    }
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
        public static implicit operator FontWeight(FontWeightCustom _weight){
            FontWeight _new = new FontWeight();
            _new.weight = (int)_weight;
            return _new;
        }
        public static implicit operator FontWeight(int _weight){
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
        public override string ToString()
        {
            return isCustom?
                "{FontCustom}":
                "{FontStyle} {FontVarient} {FontWeight}";
        }
    }
    #endregion


    public class Canvas2D{
        #region Definite
        private IJSRuntime JS;
        private String Key;
        private bool isInited = false;
        public void Init(IJSRuntime JSRuntime, String key = "canvas")
        {
            JS = JSRuntime;
            Key = key;
            isInited = true;
        }
        public async void DrawRect(Point point, Size size, Brush brush){
            await JS.InvokeVoidAsync("SetStrokeStyle", Key, brush.Convey(), brush.Alpha);
            await JS.InvokeVoidAsync("BeginPath", Key);
            await JS.InvokeVoidAsync("CreateRect", Key, point.X, point.Y, size.X, size.Y);
            await JS.InvokeVoidAsync("ClosePath", Key);
            await JS.InvokeVoidAsync("StrokePath", Key);
        }
        public async void DrawCircle(Point point, Size size, Brush brush){
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await JS.InvokeVoidAsync("SetStrokeStyle", Key, brush.Convey(), brush.Alpha);
            await JS.InvokeVoidAsync("BeginPath", Key);
            await JS.InvokeVoidAsync("CreateArc", Key, point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, 0, 2 * Math.PI);
            await JS.InvokeVoidAsync("ClosePath", Key);
            await JS.InvokeVoidAsync("StrokePath", Key);
        }
        public async void DrawArc(Point point, Size size, Brush brush, int sAngle, int eAngle, bool clockwise){
            if(size.X != size.Y) throw new Exception("The size must fit a circle!");
            await JS.InvokeVoidAsync("SetStrokeStyle", Key, brush.Convey(), brush.Alpha);
            await JS.InvokeVoidAsync("BeginPath", Key);
            await JS.InvokeVoidAsync("CreateArc", Key, point.X + size.X / 2, point.Y + size.Y / 2, size.X / 2, sAngle / 180 * Math.PI, eAngle / 180 * Math.PI, clockwise);
            await JS.InvokeVoidAsync("MoveTo", Key, point.X + size.X / 2, point.Y + size.Y / 2);
            await JS.InvokeVoidAsync("CreateLine", Key, point.X + size.X / 2 * (1 + Math.Cos(sAngle / 180 * Math.PI)), point.Y + size.Y / 2 * (1 - Math.Sin(sAngle / 180 * Math.PI)));
            await JS.InvokeVoidAsync("MoveTo", Key, point.X + size.X / 2, point.Y + size.Y / 2);
            await JS.InvokeVoidAsync("CreateLine", Key, point.X + size.X / 2 * (1 + Math.Cos(eAngle / 180 * Math.PI)), point.Y + size.Y / 2 * (1 - Math.Sin(eAngle / 180 * Math.PI)));

            await JS.InvokeVoidAsync("ClosePath", Key);
            await JS.InvokeVoidAsync("StrokePath", Key);
        }
        
        #endregion
    }
}
