using System.Text;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.JSInterop;


namespace BS
{
    public class Canvas2D
    {
        private IJSRuntime JS;
        private String Key;
        private bool isInited = false;
        public void Init(IJSRuntime JSRuntime, String key = "#canvas")
        {
            JS = JSRuntime;
            Key = key;
            isInited = true;
        }
        public String Hello() {
            
            return "Hello!";
        }
    }
}