package com.chatApp.chatApp.DTO.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MessageResponse {
    @JsonProperty("senderUserId")
    Long senderUserId;

    @JsonProperty("content")
    String content;

    @JsonProperty("sendTime")
    LocalDateTime sendTime;
}
