package models

type ImageInfo struct {

	ImageType string `json:"image_type,omitempty"`

	Width int32 `json:"width,omitempty"`

	Height int32 `json:"height,omitempty"`
}
