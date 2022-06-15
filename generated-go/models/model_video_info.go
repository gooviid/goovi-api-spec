package models

type VideoInfo struct {

	IsHdr bool `json:"is_hdr,omitempty"`

	IsMultiChannelAudio bool `json:"is_multi_channel_audio,omitempty"`

	Width int32 `json:"width,omitempty"`

	Height int32 `json:"height,omitempty"`

	Fps string `json:"fps,omitempty"`

	CodecName string `json:"codec_name,omitempty"`

	CodecType string `json:"codec_type,omitempty"`

	ResolutionHuman string `json:"resolution_human,omitempty"`

	Bitrate string `json:"bitrate,omitempty"`

	DisplayAspectRation string `json:"display_aspect_ration,omitempty"`

	AspectRatio float32 `json:"aspect_ratio,omitempty"`

	Duration float32 `json:"duration,omitempty"`
}
