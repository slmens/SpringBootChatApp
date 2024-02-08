package com.chatApp.chatApp.scheduledJobs;

import com.chatApp.chatApp.DTO.response.MessageResponse;
import com.chatApp.chatApp.socket.WSService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class WebSocketTester {
    private  final WSService wsService;
    private static final Logger LOGGER = LoggerFactory.getLogger(MessageResponse.class);

    public WebSocketTester(WSService wsService) {
        this.wsService = wsService;
    }

    @Scheduled(fixedDelay = 600000)
    public void execute(){
        LOGGER.info("Executing WebSocketJob...");
        wsService.sendGlobalNotification();
    }
}
