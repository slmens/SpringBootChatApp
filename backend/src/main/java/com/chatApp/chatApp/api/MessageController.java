package com.chatApp.chatApp.api;

import com.chatApp.chatApp.DTO.response.MessageResponse;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.security.Principal;

@Controller
public class MessageController {

    @MessageMapping("/message")
    @SendTo("/topic/messages")
    public MessageResponse getMessage(final MessageResponse message) throws InterruptedException {
        Thread.sleep(1000);
        return new MessageResponse(HtmlUtils.htmlEscape(message.getContent()),message.getSendTime());
    }

    @MessageMapping("/private-message")
    @SendToUser("/topic/private-messages")
    public MessageResponse getPrivateMessage(final MessageResponse message,
                                             final Principal principal) throws InterruptedException {
        Thread.sleep(1000);
        return new MessageResponse(HtmlUtils.htmlEscape(message.getContent()),message.getSendTime());
    }
}