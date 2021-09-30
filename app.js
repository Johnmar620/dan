btn.innerHTML= "Hide"
function myFunc(){
    var hideOrShow = document.getElementById("toggle")
    var btn = document.getElementById("btn")
    if (hideOrShow.style.display === "none"){
        hideOrShow.style.display = "block"
        btn.innerHTML= "Hide"
    }else{
        hideOrShow.style.display = "none"
        btn.innerHTML= "Show"
    }
}

new Vue ({
    el: '#container',
    data: {
        user1Style: '',
        inlineStyle: '',
        warning1: '',
        warning2: '',
        isHidden: false,
        isShow: false
    },

    methods: {
        styleMe(event){
            this.user1Style = event.target.value
            this.warning1 = false
            if (this.user1Style === "user1" || this.user1Style === "User1" || this.user1Style === "Red" || this.user1Style === "User2" || this.user1Style === "user2"){
                return this.warning1
            }else if (this.user1Style === ""){
                return this.warning1 = ''
            }
            else{
                return this.warning1 = true
            }
        },
        styleMeInLine(event){
            this.inlineStyle = event.target.value
            this.warning2 = false
            if (this.inlineStyle === "Blue" || this.inlineStyle === "blue" || this.inlineStyle === "Red" || this.inlineStyle === "red" || this.inlineStyle === "black" || this.inlineStyle === "Black"){
                return this.warning2
            }else if (this.inlineStyle === ""){
                return this.warning2 = ''
            }
            else{
                return this.warning2 = true
            }
        },
        
    }
})