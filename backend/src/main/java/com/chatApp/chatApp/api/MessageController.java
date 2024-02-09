package com.chatApp.chatApp.api;

import com.chatApp.chatApp.DTO.response.MessageResponse;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    /*@MessageMapping("/message")
    @SendTo("/topic/messages")
    public MessageResponse getMessage(final MessageResponse message) throws InterruptedException {
        return new MessageResponse(HtmlUtils.htmlEscape(message.getContent()),message.getSendTime());
    }*/

    @MessageMapping("/send-message/{userId}")
    @SendTo("/topic/user/{userId}")
    public MessageResponse sendMessage(@DestinationVariable String userId, MessageResponse message) {
        // Process the message (e.g., store it in the database)
        // You can customize the logic based on your requirements

        return message;
    }
}