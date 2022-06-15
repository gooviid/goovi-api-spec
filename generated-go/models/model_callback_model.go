package models

type CallbackModel struct {

	IsSuccess bool `json:"is_success,omitempty"`

	QueueId string `json:"queue_id,omitempty"`

	Error *TranscodeError `json:"error,omitempty"`

	Media *[]MediaInfo `json:"media,omitempty"`
}
