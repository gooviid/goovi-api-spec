package models

import (
	"time"
)

type TranscodeError struct {

	ErrorType string `json:"error_type,omitempty"`

	ErrorCause string `json:"error_cause,omitempty"`

	ErrorAt time.Time `json:"error_at,omitempty"`
}
