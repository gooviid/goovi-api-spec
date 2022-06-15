package models

type AudioInfo struct {

	Bitrate string `json:"bitrate,omitempty"`

	Frequency string `json:"frequency,omitempty"`

	Type string `json:"type,omitempty"`

	ChannelNumber int32 `json:"channel_number,omitempty"`

	ChannelName string `json:"channel_name,omitempty"`

	Duration float32 `json:"duration,omitempty"`

	AudioChannel float32 `json:"audio_channel,omitempty"`
}
