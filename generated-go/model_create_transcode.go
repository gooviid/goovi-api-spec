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

// CreateTranscode struct for CreateTranscode
type CreateTranscode struct {
	MerchantGivenId *string `json:"merchant_given_id,omitempty"`
	ResolutionTarget []string `json:"resolution_target,omitempty"`
	FileTarget []string `json:"file_target,omitempty"`
	CallbackUrl NullableString `json:"callback_url,omitempty"`
	CallbackData NullableString `json:"callback_data,omitempty"`
	// Mute Video
	Mute *bool `json:"mute,omitempty"`
	// leave 0 if transcode to full duration
	DurationInSecond NullableInt32 `json:"duration_in_second,omitempty"`
	Source *SourceTranscode `json:"source,omitempty"`
	Destination *SourceTranscode `json:"destination,omitempty"`
}

// NewCreateTranscode instantiates a new CreateTranscode object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTranscode() *CreateTranscode {
	this := CreateTranscode{}
	return &this
}

// NewCreateTranscodeWithDefaults instantiates a new CreateTranscode object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateTranscodeWithDefaults() *CreateTranscode {
	this := CreateTranscode{}
	return &this
}

// GetMerchantGivenId returns the MerchantGivenId field value if set, zero value otherwise.
func (o *CreateTranscode) GetMerchantGivenId() string {
	if o == nil || o.MerchantGivenId == nil {
		var ret string
		return ret
	}
	return *o.MerchantGivenId
}

// GetMerchantGivenIdOk returns a tuple with the MerchantGivenId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetMerchantGivenIdOk() (*string, bool) {
	if o == nil || o.MerchantGivenId == nil {
		return nil, false
	}
	return o.MerchantGivenId, true
}

// HasMerchantGivenId returns a boolean if a field has been set.
func (o *CreateTranscode) HasMerchantGivenId() bool {
	if o != nil && o.MerchantGivenId != nil {
		return true
	}

	return false
}

// SetMerchantGivenId gets a reference to the given string and assigns it to the MerchantGivenId field.
func (o *CreateTranscode) SetMerchantGivenId(v string) {
	o.MerchantGivenId = &v
}

// GetResolutionTarget returns the ResolutionTarget field value if set, zero value otherwise.
func (o *CreateTranscode) GetResolutionTarget() []string {
	if o == nil || o.ResolutionTarget == nil {
		var ret []string
		return ret
	}
	return o.ResolutionTarget
}

// GetResolutionTargetOk returns a tuple with the ResolutionTarget field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetResolutionTargetOk() ([]string, bool) {
	if o == nil || o.ResolutionTarget == nil {
		return nil, false
	}
	return o.ResolutionTarget, true
}

// HasResolutionTarget returns a boolean if a field has been set.
func (o *CreateTranscode) HasResolutionTarget() bool {
	if o != nil && o.ResolutionTarget != nil {
		return true
	}

	return false
}

// SetResolutionTarget gets a reference to the given []string and assigns it to the ResolutionTarget field.
func (o *CreateTranscode) SetResolutionTarget(v []string) {
	o.ResolutionTarget = v
}

// GetFileTarget returns the FileTarget field value if set, zero value otherwise.
func (o *CreateTranscode) GetFileTarget() []string {
	if o == nil || o.FileTarget == nil {
		var ret []string
		return ret
	}
	return o.FileTarget
}

// GetFileTargetOk returns a tuple with the FileTarget field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetFileTargetOk() ([]string, bool) {
	if o == nil || o.FileTarget == nil {
		return nil, false
	}
	return o.FileTarget, true
}

// HasFileTarget returns a boolean if a field has been set.
func (o *CreateTranscode) HasFileTarget() bool {
	if o != nil && o.FileTarget != nil {
		return true
	}

	return false
}

// SetFileTarget gets a reference to the given []string and assigns it to the FileTarget field.
func (o *CreateTranscode) SetFileTarget(v []string) {
	o.FileTarget = v
}

// GetCallbackUrl returns the CallbackUrl field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CreateTranscode) GetCallbackUrl() string {
	if o == nil || o.CallbackUrl.Get() == nil {
		var ret string
		return ret
	}
	return *o.CallbackUrl.Get()
}

// GetCallbackUrlOk returns a tuple with the CallbackUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CreateTranscode) GetCallbackUrlOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.CallbackUrl.Get(), o.CallbackUrl.IsSet()
}

// HasCallbackUrl returns a boolean if a field has been set.
func (o *CreateTranscode) HasCallbackUrl() bool {
	if o != nil && o.CallbackUrl.IsSet() {
		return true
	}

	return false
}

// SetCallbackUrl gets a reference to the given NullableString and assigns it to the CallbackUrl field.
func (o *CreateTranscode) SetCallbackUrl(v string) {
	o.CallbackUrl.Set(&v)
}
// SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil
func (o *CreateTranscode) SetCallbackUrlNil() {
	o.CallbackUrl.Set(nil)
}

// UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
func (o *CreateTranscode) UnsetCallbackUrl() {
	o.CallbackUrl.Unset()
}

// GetCallbackData returns the CallbackData field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CreateTranscode) GetCallbackData() string {
	if o == nil || o.CallbackData.Get() == nil {
		var ret string
		return ret
	}
	return *o.CallbackData.Get()
}

// GetCallbackDataOk returns a tuple with the CallbackData field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CreateTranscode) GetCallbackDataOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.CallbackData.Get(), o.CallbackData.IsSet()
}

// HasCallbackData returns a boolean if a field has been set.
func (o *CreateTranscode) HasCallbackData() bool {
	if o != nil && o.CallbackData.IsSet() {
		return true
	}

	return false
}

// SetCallbackData gets a reference to the given NullableString and assigns it to the CallbackData field.
func (o *CreateTranscode) SetCallbackData(v string) {
	o.CallbackData.Set(&v)
}
// SetCallbackDataNil sets the value for CallbackData to be an explicit nil
func (o *CreateTranscode) SetCallbackDataNil() {
	o.CallbackData.Set(nil)
}

// UnsetCallbackData ensures that no value is present for CallbackData, not even an explicit nil
func (o *CreateTranscode) UnsetCallbackData() {
	o.CallbackData.Unset()
}

// GetMute returns the Mute field value if set, zero value otherwise.
func (o *CreateTranscode) GetMute() bool {
	if o == nil || o.Mute == nil {
		var ret bool
		return ret
	}
	return *o.Mute
}

// GetMuteOk returns a tuple with the Mute field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetMuteOk() (*bool, bool) {
	if o == nil || o.Mute == nil {
		return nil, false
	}
	return o.Mute, true
}

// HasMute returns a boolean if a field has been set.
func (o *CreateTranscode) HasMute() bool {
	if o != nil && o.Mute != nil {
		return true
	}

	return false
}

// SetMute gets a reference to the given bool and assigns it to the Mute field.
func (o *CreateTranscode) SetMute(v bool) {
	o.Mute = &v
}

// GetDurationInSecond returns the DurationInSecond field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CreateTranscode) GetDurationInSecond() int32 {
	if o == nil || o.DurationInSecond.Get() == nil {
		var ret int32
		return ret
	}
	return *o.DurationInSecond.Get()
}

// GetDurationInSecondOk returns a tuple with the DurationInSecond field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CreateTranscode) GetDurationInSecondOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return o.DurationInSecond.Get(), o.DurationInSecond.IsSet()
}

// HasDurationInSecond returns a boolean if a field has been set.
func (o *CreateTranscode) HasDurationInSecond() bool {
	if o != nil && o.DurationInSecond.IsSet() {
		return true
	}

	return false
}

// SetDurationInSecond gets a reference to the given NullableInt32 and assigns it to the DurationInSecond field.
func (o *CreateTranscode) SetDurationInSecond(v int32) {
	o.DurationInSecond.Set(&v)
}
// SetDurationInSecondNil sets the value for DurationInSecond to be an explicit nil
func (o *CreateTranscode) SetDurationInSecondNil() {
	o.DurationInSecond.Set(nil)
}

// UnsetDurationInSecond ensures that no value is present for DurationInSecond, not even an explicit nil
func (o *CreateTranscode) UnsetDurationInSecond() {
	o.DurationInSecond.Unset()
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *CreateTranscode) GetSource() SourceTranscode {
	if o == nil || o.Source == nil {
		var ret SourceTranscode
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetSourceOk() (*SourceTranscode, bool) {
	if o == nil || o.Source == nil {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *CreateTranscode) HasSource() bool {
	if o != nil && o.Source != nil {
		return true
	}

	return false
}

// SetSource gets a reference to the given SourceTranscode and assigns it to the Source field.
func (o *CreateTranscode) SetSource(v SourceTranscode) {
	o.Source = &v
}

// GetDestination returns the Destination field value if set, zero value otherwise.
func (o *CreateTranscode) GetDestination() SourceTranscode {
	if o == nil || o.Destination == nil {
		var ret SourceTranscode
		return ret
	}
	return *o.Destination
}

// GetDestinationOk returns a tuple with the Destination field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTranscode) GetDestinationOk() (*SourceTranscode, bool) {
	if o == nil || o.Destination == nil {
		return nil, false
	}
	return o.Destination, true
}

// HasDestination returns a boolean if a field has been set.
func (o *CreateTranscode) HasDestination() bool {
	if o != nil && o.Destination != nil {
		return true
	}

	return false
}

// SetDestination gets a reference to the given SourceTranscode and assigns it to the Destination field.
func (o *CreateTranscode) SetDestination(v SourceTranscode) {
	o.Destination = &v
}

func (o CreateTranscode) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.MerchantGivenId != nil {
		toSerialize["merchant_given_id"] = o.MerchantGivenId
	}
	if o.ResolutionTarget != nil {
		toSerialize["resolution_target"] = o.ResolutionTarget
	}
	if o.FileTarget != nil {
		toSerialize["file_target"] = o.FileTarget
	}
	if o.CallbackUrl.IsSet() {
		toSerialize["callback_url"] = o.CallbackUrl.Get()
	}
	if o.CallbackData.IsSet() {
		toSerialize["callback_data"] = o.CallbackData.Get()
	}
	if o.Mute != nil {
		toSerialize["mute"] = o.Mute
	}
	if o.DurationInSecond.IsSet() {
		toSerialize["duration_in_second"] = o.DurationInSecond.Get()
	}
	if o.Source != nil {
		toSerialize["source"] = o.Source
	}
	if o.Destination != nil {
		toSerialize["destination"] = o.Destination
	}
	return json.Marshal(toSerialize)
}

type NullableCreateTranscode struct {
	value *CreateTranscode
	isSet bool
}

func (v NullableCreateTranscode) Get() *CreateTranscode {
	return v.value
}

func (v *NullableCreateTranscode) Set(val *CreateTranscode) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateTranscode) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateTranscode) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateTranscode(val *CreateTranscode) *NullableCreateTranscode {
	return &NullableCreateTranscode{value: val, isSet: true}
}

func (v NullableCreateTranscode) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateTranscode) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


