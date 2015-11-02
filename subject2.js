/**
 * Created by mg on 2015. 11. 2..
 */
var subject;
subject = {
    data: function() {
        var topMenuEle = this.getMainService();
        var ele = [];
        for (var i = 0; i < topMenuEle.length; i++) {
            var obj = {};
            obj["href"] = topMenuEle[i].childNodes[1].getAttribute("href");
            obj["class"] = topMenuEle[i].childNodes[1].getAttribute("class");
            obj["text"] = topMenuEle[i].childNodes[1].innerHTML;
            ele.push(obj);
        }

        return ele;
    },
    getMainService: function () {
        this.prevTopMenu = document.getElementById("daumHead").getElementsByTagName("ul")[1].getElementsByTagName("li") || this.prevTopMenu;
        return this.prevTopMenu;
    },
    removeMainService: function () {
        document.getElementById("daumHead").getElementsByTagName("ul")[1].remove();
    },
    makeMainService: function () {
        var element = '<ul>';
        var objArray = this.data();
        for( var i = 0; i < objArray.length; i++ ) {
            element += '<li>'
                + '<a href="' + objArray[i]["href"] + '" '
                + 'class="' + objArray[i]["class"] + '">'
                + objArray[i]["text"] +'</a>'
                + '</li>';
        }
        element += '</ul>';
        return element;
    }
};