package models

type SourceTranscode struct {

	Url string `json:"url,omitempty"`

	IsPublic bool `json:"isPublic,omitempty"`

	AccessKeyId string `json:"access_key_id,omitempty"`

	AccessKeySecret string `json:"access_key_secret,omitempty"`
}
