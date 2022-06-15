package models

type CreateTranscode struct {

	ResolutionTarget []string `json:"resolution_target,omitempty"`

	FileTarget []string `json:"file_target,omitempty"`

	CallbackUrl *string `json:"callback_url,omitempty"`

	DurationInSecond *int32 `json:"duration_in_second,omitempty"`

	Source SourceTranscode `json:"source,omitempty"`

	Destination SourceTranscode `json:"destination,omitempty"`
}
