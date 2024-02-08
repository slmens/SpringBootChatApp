package com.chatApp.chatApp.DTO.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MessageResponse {
    String content;
    LocalDateTime sendTime;
}
