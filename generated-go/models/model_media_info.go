package models

import (
	"time"
)

type MediaInfo struct {

	CreatedAt time.Time `json:"created_at,omitempty"`

	Mime string `json:"mime,omitempty"`

	Size int32 `json:"size,omitempty"`

	SizeHuman string `json:"size_human,omitempty"`

	RemoteUrl string `json:"remote_url,omitempty"`

	RemoteRelativeUrl string `json:"remote_relative_url,omitempty"`

	Video *VideoInfo `json:"video,omitempty"`

	Audio *AudioInfo `json:"audio,omitempty"`

	Image *ImageInfo `json:"image,omitempty"`
}
