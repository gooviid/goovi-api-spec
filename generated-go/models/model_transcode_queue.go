package models

import (
	"time"
)

type TranscodeQueue struct {

	QueueId string `json:"queue_id,omitempty"`

	QueueStatus string `json:"queue_status,omitempty"`

	ChargeStatus string `json:"charge_status,omitempty"`

	TotalPrice float32 `json:"total_price,omitempty"`

	CreatedAt time.Time `json:"created_at,omitempty"`

	ResolutionTarget []string `json:"resolution_target,omitempty"`

	FileTarget []string `json:"file_target,omitempty"`

	RequestDuration int32 `json:"request_duration,omitempty"`

	Source SourceTranscode `json:"source,omitempty"`

	Destination SourceTranscode `json:"destination,omitempty"`

	BillingDetail []BillingDetail `json:"billing_detail,omitempty"`

	Media MediaInfo `json:"media,omitempty"`

	TranscodeMeta *TranscodeMeta `json:"transcode_meta,omitempty"`

	Error *TranscodeError `json:"error,omitempty"`
}
