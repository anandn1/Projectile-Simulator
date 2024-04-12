const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    (function() {;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};
        
        (function(){
            function strings() {
                var string_funcs, exclude, name;
                string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
                if (!arguments.length) {
                    exclude = (function(){
                        var s = ρσ_set();
                        s.jsset.add("split");
                        s.jsset.add("replace");
                        return s;
                    })();
                } else if (arguments[0]) {
                    exclude = Array.prototype.slice.call(arguments);
                } else {
                    exclude = null;
                }
                if (exclude) {
                    string_funcs = string_funcs.difference(set(exclude));
                }
                var ρσ_Iter0 = string_funcs;
                ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
                for (var ρσ_Index0 of ρσ_Iter0) {
                    name = ρσ_Index0;
                    (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
                }
            };
            if (!strings.__module__) Object.defineProperties(strings, {
                __module__ : {value: "pythonize"}
            });
        
            ρσ_modules.pythonize.strings = strings;
        })();
        async function __main__() {
        "use strict";
            var display = canvas;
            var scene = canvas();
        
            function round(num, n=0) {return Number(num.toFixed(n))}
        
            function input(arg) {
                arg = arg || {}
                if (arg.prompt !== undefined && arg.prompt != '') return prompt(arg.prompt)
                else if (typeof arg === 'string') return prompt(arg)
                else return prompt()
            }
        
            var version, print, arange, __name__, type, ρσ_ls, v0, theta, ball, ground, vscale, varrow, t, dt, g1, f1, g2, f2, g3, f3, g4, f4, g, F, a;
            version = ρσ_list_decorate([ "3.2", "glowscript" ]);
            Array.prototype['+'] = function(r) {return this.concat(r)}
            Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
            window.__GSlang = "vpython";
            print = GSprint;
            arange = range;
            __name__ = "__main__";
            type = pytype;
            var strings = ρσ_modules.pythonize.strings;
        
            strings();
            sleep(.1);
            "3";
            v0 = float(input("Velocity (in m/s) : "));
            (await sleep(.1));
            "4";
            theta = float(input("Angle (in Degrees) : "));
            "5";
            theta=theta["*"](pi["/"](180));
            "7";
            ball = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(0, .1, 0), radius: .05, color: color.yellow, make_trail: true})]);
            "8";
            ground = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({pos: vector(0, 0, 0), size: vector(250, .05, 250)})]);
            "10";
            ball.m = .05;
            "11";
            ball.v = v0["*"](vector(cos(theta), sin(theta), 0));
            "13";
            vscale = .9;
            "14";
            varrow = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: ball.pos, axis: vscale["*"](ball.v), color: color.cyan})]);
            "16";
            t = 0;
            "17";
            dt = .01;
            "22";
            g1 = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({xtitle: "t [s]", ytitle: "y [m]"})]);
            "23";
            f1 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue})]);
            "25";
            g2 = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({xtitle: "t[s]", ytitle: "x[m]"})]);
            "26";
            f2 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue})]);
            "28";
            g3 = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({xtitle: "t[s]", ytitle: "V.y[m/s]"})]);
            "29";
            f3 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue})]);
            "31";
            g4 = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({xtitle: "t[s]", ytitle: "V.x[m/s]"})]);
            "32";
            f4 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue})]);
            "34";
            g = vector(0, 1["-u"]()["*"](9.8), 0);
            "36";
            while (ball.pos.y[">="](ground.pos.y["+"](ball.radius)["+"](ground.size.y))) {
                "37";
                (await rate(100));
                "38";
                F = ball.m["*"](g);
                "39";
                a = F["/"](ball.m);
                "40";
                ball.v = ball.v["+"](a["*"](dt));
                "41";
                ball.pos = ball.pos["+"](ball.v["*"](dt));
                "42";
                varrow.pos = ball.pos;
                "43";
                varrow.axis = vscale["*"](ball.v);
                "44";
                t=t["+"](dt);
                "45";
                f1.plot(t, ball.pos.y);
                "46";
                f2.plot(t, ball.pos.x);
                "47";
                f3.plot(t, ball.v.y);
                "48";
                f4.plot(t, ball.v.x);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__ : {value: null}
        });
        
        ;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
        // END JAVASCRIPT
    
});