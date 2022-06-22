# AdaptiveStreamingInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**FileType** | Pointer to **string** |  | [optional] 
**IsVideo** | Pointer to **bool** |  | [optional] 
**DisplayAspectRatio** | Pointer to **NullableString** |  | [optional] 
**AspectRatio** | Pointer to **NullableFloat32** |  | [optional] 
**Duration** | Pointer to **float32** |  | [optional] 
**Fps** | Pointer to **NullableFloat32** |  | [optional] 

## Methods

### NewAdaptiveStreamingInfo

`func NewAdaptiveStreamingInfo() *AdaptiveStreamingInfo`

NewAdaptiveStreamingInfo instantiates a new AdaptiveStreamingInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdaptiveStreamingInfoWithDefaults

`func NewAdaptiveStreamingInfoWithDefaults() *AdaptiveStreamingInfo`

NewAdaptiveStreamingInfoWithDefaults instantiates a new AdaptiveStreamingInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AdaptiveStreamingInfo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AdaptiveStreamingInfo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AdaptiveStreamingInfo) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AdaptiveStreamingInfo) HasType() bool`

HasType returns a boolean if a field has been set.

### GetFileType

`func (o *AdaptiveStreamingInfo) GetFileType() string`

GetFileType returns the FileType field if non-nil, zero value otherwise.

### GetFileTypeOk

`func (o *AdaptiveStreamingInfo) GetFileTypeOk() (*string, bool)`

GetFileTypeOk returns a tuple with the FileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileType

`func (o *AdaptiveStreamingInfo) SetFileType(v string)`

SetFileType sets FileType field to given value.

### HasFileType

`func (o *AdaptiveStreamingInfo) HasFileType() bool`

HasFileType returns a boolean if a field has been set.

### GetIsVideo

`func (o *AdaptiveStreamingInfo) GetIsVideo() bool`

GetIsVideo returns the IsVideo field if non-nil, zero value otherwise.

### GetIsVideoOk

`func (o *AdaptiveStreamingInfo) GetIsVideoOk() (*bool, bool)`

GetIsVideoOk returns a tuple with the IsVideo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVideo

`func (o *AdaptiveStreamingInfo) SetIsVideo(v bool)`

SetIsVideo sets IsVideo field to given value.

### HasIsVideo

`func (o *AdaptiveStreamingInfo) HasIsVideo() bool`

HasIsVideo returns a boolean if a field has been set.

### GetDisplayAspectRatio

`func (o *AdaptiveStreamingInfo) GetDisplayAspectRatio() string`

GetDisplayAspectRatio returns the DisplayAspectRatio field if non-nil, zero value otherwise.

### GetDisplayAspectRatioOk

`func (o *AdaptiveStreamingInfo) GetDisplayAspectRatioOk() (*string, bool)`

GetDisplayAspectRatioOk returns a tuple with the DisplayAspectRatio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayAspectRatio

`func (o *AdaptiveStreamingInfo) SetDisplayAspectRatio(v string)`

SetDisplayAspectRatio sets DisplayAspectRatio field to given value.

### HasDisplayAspectRatio

`func (o *AdaptiveStreamingInfo) HasDisplayAspectRatio() bool`

HasDisplayAspectRatio returns a boolean if a field has been set.

### SetDisplayAspectRatioNil

`func (o *AdaptiveStreamingInfo) SetDisplayAspectRatioNil(b bool)`

 SetDisplayAspectRatioNil sets the value for DisplayAspectRatio to be an explicit nil

### UnsetDisplayAspectRatio
`func (o *AdaptiveStreamingInfo) UnsetDisplayAspectRatio()`

UnsetDisplayAspectRatio ensures that no value is present for DisplayAspectRatio, not even an explicit nil
### GetAspectRatio

`func (o *AdaptiveStreamingInfo) GetAspectRatio() float32`

GetAspectRatio returns the AspectRatio field if non-nil, zero value otherwise.

### GetAspectRatioOk

`func (o *AdaptiveStreamingInfo) GetAspectRatioOk() (*float32, bool)`

GetAspectRatioOk returns a tuple with the AspectRatio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAspectRatio

`func (o *AdaptiveStreamingInfo) SetAspectRatio(v float32)`

SetAspectRatio sets AspectRatio field to given value.

### HasAspectRatio

`func (o *AdaptiveStreamingInfo) HasAspectRatio() bool`

HasAspectRatio returns a boolean if a field has been set.

### SetAspectRatioNil

`func (o *AdaptiveStreamingInfo) SetAspectRatioNil(b bool)`

 SetAspectRatioNil sets the value for AspectRatio to be an explicit nil

### UnsetAspectRatio
`func (o *AdaptiveStreamingInfo) UnsetAspectRatio()`

UnsetAspectRatio ensures that no value is present for AspectRatio, not even an explicit nil
### GetDuration

`func (o *AdaptiveStreamingInfo) GetDuration() float32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *AdaptiveStreamingInfo) GetDurationOk() (*float32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *AdaptiveStreamingInfo) SetDuration(v float32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *AdaptiveStreamingInfo) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetFps

`func (o *AdaptiveStreamingInfo) GetFps() float32`

GetFps returns the Fps field if non-nil, zero value otherwise.

### GetFpsOk

`func (o *AdaptiveStreamingInfo) GetFpsOk() (*float32, bool)`

GetFpsOk returns a tuple with the Fps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFps

`func (o *AdaptiveStreamingInfo) SetFps(v float32)`

SetFps sets Fps field to given value.

### HasFps

`func (o *AdaptiveStreamingInfo) HasFps() bool`

HasFps returns a boolean if a field has been set.

### SetFpsNil

`func (o *AdaptiveStreamingInfo) SetFpsNil(b bool)`

 SetFpsNil sets the value for Fps to be an explicit nil

### UnsetFps
`func (o *AdaptiveStreamingInfo) UnsetFps()`

UnsetFps ensures that no value is present for Fps, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


