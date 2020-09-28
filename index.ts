new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        string: "",
        result: "",
        
    },
    methods: {
        doIt() {
            
            let value = (<HTMLSelectElement>document.getElementById('Choices')).value

            
            if (value == "lowerCase") {
                this.result = this.string.toLowerCase()
            }
            else if (value == "upperCase") {
                this.result = this.string.toUpperCase()
            }
            else {
                this.result = "Hello nothing"
            }
        }
    },
    
    
})