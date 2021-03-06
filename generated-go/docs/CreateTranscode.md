# CreateTranscode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MerchantGivenId** | Pointer to **string** |  | [optional] 
**ResolutionTarget** | Pointer to **[]string** |  | [optional] 
**FileTarget** | Pointer to **[]string** |  | [optional] 
**CallbackUrl** | Pointer to **NullableString** |  | [optional] 
**CallbackData** | Pointer to **NullableString** |  | [optional] 
**Mute** | Pointer to **bool** | Mute Video | [optional] 
**DurationInSecond** | Pointer to **NullableInt32** | leave 0 if transcode to full duration | [optional] 
**Source** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 
**Destination** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 

## Methods

### NewCreateTranscode

`func NewCreateTranscode() *CreateTranscode`

NewCreateTranscode instantiates a new CreateTranscode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTranscodeWithDefaults

`func NewCreateTranscodeWithDefaults() *CreateTranscode`

NewCreateTranscodeWithDefaults instantiates a new CreateTranscode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMerchantGivenId

`func (o *CreateTranscode) GetMerchantGivenId() string`

GetMerchantGivenId returns the MerchantGivenId field if non-nil, zero value otherwise.

### GetMerchantGivenIdOk

`func (o *CreateTranscode) GetMerchantGivenIdOk() (*string, bool)`

GetMerchantGivenIdOk returns a tuple with the MerchantGivenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantGivenId

`func (o *CreateTranscode) SetMerchantGivenId(v string)`

SetMerchantGivenId sets MerchantGivenId field to given value.

### HasMerchantGivenId

`func (o *CreateTranscode) HasMerchantGivenId() bool`

HasMerchantGivenId returns a boolean if a field has been set.

### GetResolutionTarget

`func (o *CreateTranscode) GetResolutionTarget() []string`

GetResolutionTarget returns the ResolutionTarget field if non-nil, zero value otherwise.

### GetResolutionTargetOk

`func (o *CreateTranscode) GetResolutionTargetOk() (*[]string, bool)`

GetResolutionTargetOk returns a tuple with the ResolutionTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionTarget

`func (o *CreateTranscode) SetResolutionTarget(v []string)`

SetResolutionTarget sets ResolutionTarget field to given value.

### HasResolutionTarget

`func (o *CreateTranscode) HasResolutionTarget() bool`

HasResolutionTarget returns a boolean if a field has been set.

### GetFileTarget

`func (o *CreateTranscode) GetFileTarget() []string`

GetFileTarget returns the FileTarget field if non-nil, zero value otherwise.

### GetFileTargetOk

`func (o *CreateTranscode) GetFileTargetOk() (*[]string, bool)`

GetFileTargetOk returns a tuple with the FileTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileTarget

`func (o *CreateTranscode) SetFileTarget(v []string)`

SetFileTarget sets FileTarget field to given value.

### HasFileTarget

`func (o *CreateTranscode) HasFileTarget() bool`

HasFileTarget returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *CreateTranscode) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *CreateTranscode) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *CreateTranscode) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *CreateTranscode) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### SetCallbackUrlNil

`func (o *CreateTranscode) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *CreateTranscode) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetCallbackData

`func (o *CreateTranscode) GetCallbackData() string`

GetCallbackData returns the CallbackData field if non-nil, zero value otherwise.

### GetCallbackDataOk

`func (o *CreateTranscode) GetCallbackDataOk() (*string, bool)`

GetCallbackDataOk returns a tuple with the CallbackData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackData

`func (o *CreateTranscode) SetCallbackData(v string)`

SetCallbackData sets CallbackData field to given value.

### HasCallbackData

`func (o *CreateTranscode) HasCallbackData() bool`

HasCallbackData returns a boolean if a field has been set.

### SetCallbackDataNil

`func (o *CreateTranscode) SetCallbackDataNil(b bool)`

 SetCallbackDataNil sets the value for CallbackData to be an explicit nil

### UnsetCallbackData
`func (o *CreateTranscode) UnsetCallbackData()`

UnsetCallbackData ensures that no value is present for CallbackData, not even an explicit nil
### GetMute

`func (o *CreateTranscode) GetMute() bool`

GetMute returns the Mute field if non-nil, zero value otherwise.

### GetMuteOk

`func (o *CreateTranscode) GetMuteOk() (*bool, bool)`

GetMuteOk returns a tuple with the Mute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMute

`func (o *CreateTranscode) SetMute(v bool)`

SetMute sets Mute field to given value.

### HasMute

`func (o *CreateTranscode) HasMute() bool`

HasMute returns a boolean if a field has been set.

### GetDurationInSecond

`func (o *CreateTranscode) GetDurationInSecond() int32`

GetDurationInSecond returns the DurationInSecond field if non-nil, zero value otherwise.

### GetDurationInSecondOk

`func (o *CreateTranscode) GetDurationInSecondOk() (*int32, bool)`

GetDurationInSecondOk returns a tuple with the DurationInSecond field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationInSecond

`func (o *CreateTranscode) SetDurationInSecond(v int32)`

SetDurationInSecond sets DurationInSecond field to given value.

### HasDurationInSecond

`func (o *CreateTranscode) HasDurationInSecond() bool`

HasDurationInSecond returns a boolean if a field has been set.

### SetDurationInSecondNil

`func (o *CreateTranscode) SetDurationInSecondNil(b bool)`

 SetDurationInSecondNil sets the value for DurationInSecond to be an explicit nil

### UnsetDurationInSecond
`func (o *CreateTranscode) UnsetDurationInSecond()`

UnsetDurationInSecond ensures that no value is present for DurationInSecond, not even an explicit nil
### GetSource

`func (o *CreateTranscode) GetSource() SourceTranscode`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateTranscode) GetSourceOk() (*SourceTranscode, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateTranscode) SetSource(v SourceTranscode)`

SetSource sets Source field to given value.

### HasSource

`func (o *CreateTranscode) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDestination

`func (o *CreateTranscode) GetDestination() SourceTranscode`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *CreateTranscode) GetDestinationOk() (*SourceTranscode, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *CreateTranscode) SetDestination(v SourceTranscode)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *CreateTranscode) HasDestination() bool`

HasDestination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


