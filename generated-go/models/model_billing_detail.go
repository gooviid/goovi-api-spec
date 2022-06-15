package models

type BillingDetail struct {

	Qty int32 `json:"qty,omitempty"`

	Method string `json:"method,omitempty"`

	Total float32 `json:"total,omitempty"`

	Price float32 `json:"price,omitempty"`
}
