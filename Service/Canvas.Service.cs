using System.Text;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.JSInterop;


namespace System.Drawing.Canvas
{
    public struct Color{
        public Color(int Red, int Green, int Blue, int Alpha)=>
            (r, g, b, a) = (Red, Green, Blue, Alpha);
        public int r;
        public int g;
        public int b;
        public int a;
    }
    public abstract class Brush{

    }
    public sealed class SolidBrush{
        public Color Color;
        public SolidBrush(Color color) => Color = color;
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
        public void Init(IJSRuntime JSRuntime, String key = "#canvas")
        {
            JS = JSRuntime;
            Key = key;
            isInited = true;
        }
        #endregion
    }
}