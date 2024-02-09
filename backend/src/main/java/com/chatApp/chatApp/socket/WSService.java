package com.chatApp.chatApp.socket;

import com.chatApp.chatApp.DTO.response.MessageResponse;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class WSService {
    private final SimpMessagingTemplate messagingTemplate;

    public WSService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendGlobalNotification() {
        MessageResponse message = new MessageResponse("deleteAllMessages", LocalDateTime.now());
        messagingTemplate.convertAndSend("/topic/globalNotifications", message);
    }
}