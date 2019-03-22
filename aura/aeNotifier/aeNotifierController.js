/* aeNotifierController.js */
({
    fireApplicationEvent : function(cmp, event) {
        // Get the application event by using the
        // e.<namespace>.<event> syntax
        var appEvent = $A.get("e.c:aeEvent");
        appEvent.setParams({
            "message" : "An application event fired me. " +
                "It all happened so fast. Now, I'm everywhere!" });
        console.log('*** ' + 'sending application event' + ' ***');
        appEvent.fire();
    },

    fireApplicationEventUsingLtngSendMessage : function(cmp, event) {
        // var sendMsgEvent = window.$A.get("e.ltng:sendMessage");
        var sendMsgEvent = $A.get("e.ltng:sendMessage");
        sendMsgEvent.setParams({
            "message": "Hello World",
            "channel": "AccountsChannel"
        });
        console.log('*** ' + 'sending ltng:sendMsg event' + ' ***');
        sendMsgEvent.fire();
    },

    fireComponentEvent : function(cmp, event) {
        // Get the component event by name
        var componentEvent = cmp.getEvent("componentEvent");
        componentEvent.setParams({
            "message" : "A COMPONENT event fired me. " +
                "It all happened so fast. But I didn't go sideways only up!" });
        console.log('*** ' + 'sending component event' + ' ***');
        componentEvent.fire();
    },

})