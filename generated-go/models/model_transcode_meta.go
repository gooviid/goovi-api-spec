package models

import (
	"time"
)

type TranscodeMeta struct {

	ProcessStartAt time.Time `json:"process_start_at,omitempty"`

	ProcessEndAt time.Time `json:"process_end_at,omitempty"`

	ProcessDuration float32 `json:"process_duration,omitempty"`

	TranscodeStartAt time.Time `json:"transcode_start_at,omitempty"`

	TranscodeEndAt time.Time `json:"transcode_end_at,omitempty"`

	TranscodeDuration float32 `json:"transcode_duration,omitempty"`
}
