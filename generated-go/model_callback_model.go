/*
GOOVE

GOOVI API Design Spec

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// CallbackModel struct for CallbackModel
type CallbackModel struct {
	IsSuccess *bool `json:"is_success,omitempty"`
	QueueId *string `json:"queue_id,omitempty"`
	Error NullableTranscodeError `json:"error,omitempty"`
	Media []MediaInfo `json:"media,omitempty"`
}

// NewCallbackModel instantiates a new CallbackModel object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCallbackModel() *CallbackModel {
	this := CallbackModel{}
	return &this
}

// NewCallbackModelWithDefaults instantiates a new CallbackModel object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCallbackModelWithDefaults() *CallbackModel {
	this := CallbackModel{}
	return &this
}

// GetIsSuccess returns the IsSuccess field value if set, zero value otherwise.
func (o *CallbackModel) GetIsSuccess() bool {
	if o == nil || o.IsSuccess == nil {
		var ret bool
		return ret
	}
	return *o.IsSuccess
}

// GetIsSuccessOk returns a tuple with the IsSuccess field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallbackModel) GetIsSuccessOk() (*bool, bool) {
	if o == nil || o.IsSuccess == nil {
		return nil, false
	}
	return o.IsSuccess, true
}

// HasIsSuccess returns a boolean if a field has been set.
func (o *CallbackModel) HasIsSuccess() bool {
	if o != nil && o.IsSuccess != nil {
		return true
	}

	return false
}

// SetIsSuccess gets a reference to the given bool and assigns it to the IsSuccess field.
func (o *CallbackModel) SetIsSuccess(v bool) {
	o.IsSuccess = &v
}

// GetQueueId returns the QueueId field value if set, zero value otherwise.
func (o *CallbackModel) GetQueueId() string {
	if o == nil || o.QueueId == nil {
		var ret string
		return ret
	}
	return *o.QueueId
}

// GetQueueIdOk returns a tuple with the QueueId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CallbackModel) GetQueueIdOk() (*string, bool) {
	if o == nil || o.QueueId == nil {
		return nil, false
	}
	return o.QueueId, true
}

// HasQueueId returns a boolean if a field has been set.
func (o *CallbackModel) HasQueueId() bool {
	if o != nil && o.QueueId != nil {
		return true
	}

	return false
}

// SetQueueId gets a reference to the given string and assigns it to the QueueId field.
func (o *CallbackModel) SetQueueId(v string) {
	o.QueueId = &v
}

// GetError returns the Error field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CallbackModel) GetError() TranscodeError {
	if o == nil || o.Error.Get() == nil {
		var ret TranscodeError
		return ret
	}
	return *o.Error.Get()
}

// GetErrorOk returns a tuple with the Error field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CallbackModel) GetErrorOk() (*TranscodeError, bool) {
	if o == nil {
		return nil, false
	}
	return o.Error.Get(), o.Error.IsSet()
}

// HasError returns a boolean if a field has been set.
func (o *CallbackModel) HasError() bool {
	if o != nil && o.Error.IsSet() {
		return true
	}

	return false
}

// SetError gets a reference to the given NullableTranscodeError and assigns it to the Error field.
func (o *CallbackModel) SetError(v TranscodeError) {
	o.Error.Set(&v)
}
// SetErrorNil sets the value for Error to be an explicit nil
func (o *CallbackModel) SetErrorNil() {
	o.Error.Set(nil)
}

// UnsetError ensures that no value is present for Error, not even an explicit nil
func (o *CallbackModel) UnsetError() {
	o.Error.Unset()
}

// GetMedia returns the Media field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CallbackModel) GetMedia() []MediaInfo {
	if o == nil {
		var ret []MediaInfo
		return ret
	}
	return o.Media
}

// GetMediaOk returns a tuple with the Media field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CallbackModel) GetMediaOk() ([]MediaInfo, bool) {
	if o == nil || o.Media == nil {
		return nil, false
	}
	return o.Media, true
}

// HasMedia returns a boolean if a field has been set.
func (o *CallbackModel) HasMedia() bool {
	if o != nil && o.Media != nil {
		return true
	}

	return false
}

// SetMedia gets a reference to the given []MediaInfo and assigns it to the Media field.
func (o *CallbackModel) SetMedia(v []MediaInfo) {
	o.Media = v
}

func (o CallbackModel) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.IsSuccess != nil {
		toSerialize["is_success"] = o.IsSuccess
	}
	if o.QueueId != nil {
		toSerialize["queue_id"] = o.QueueId
	}
	if o.Error.IsSet() {
		toSerialize["error"] = o.Error.Get()
	}
	if o.Media != nil {
		toSerialize["media"] = o.Media
	}
	return json.Marshal(toSerialize)
}

type NullableCallbackModel struct {
	value *CallbackModel
	isSet bool
}

func (v NullableCallbackModel) Get() *CallbackModel {
	return v.value
}

func (v *NullableCallbackModel) Set(val *CallbackModel) {
	v.value = val
	v.isSet = true
}

func (v NullableCallbackModel) IsSet() bool {
	return v.isSet
}

func (v *NullableCallbackModel) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCallbackModel(val *CallbackModel) *NullableCallbackModel {
	return &NullableCallbackModel{value: val, isSet: true}
}

func (v NullableCallbackModel) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCallbackModel) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


