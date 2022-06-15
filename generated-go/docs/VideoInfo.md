# VideoInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsHdr** | Pointer to **bool** |  | [optional] 
**IsMultiChannelAudio** | Pointer to **bool** |  | [optional] 
**Width** | Pointer to **int32** |  | [optional] 
**Height** | Pointer to **int32** |  | [optional] 
**Fps** | Pointer to **float32** |  | [optional] 
**CodecName** | Pointer to **string** |  | [optional] 
**CodecType** | Pointer to **string** |  | [optional] 
**ResolutionHuman** | Pointer to **string** |  | [optional] 
**Bitrate** | Pointer to **string** |  | [optional] 
**DisplayAspectRation** | Pointer to **string** |  | [optional] 
**AspectRatio** | Pointer to **float32** |  | [optional] 
**Duration** | Pointer to **float32** |  | [optional] 

## Methods

### NewVideoInfo

`func NewVideoInfo() *VideoInfo`

NewVideoInfo instantiates a new VideoInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVideoInfoWithDefaults

`func NewVideoInfoWithDefaults() *VideoInfo`

NewVideoInfoWithDefaults instantiates a new VideoInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsHdr

`func (o *VideoInfo) GetIsHdr() bool`

GetIsHdr returns the IsHdr field if non-nil, zero value otherwise.

### GetIsHdrOk

`func (o *VideoInfo) GetIsHdrOk() (*bool, bool)`

GetIsHdrOk returns a tuple with the IsHdr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHdr

`func (o *VideoInfo) SetIsHdr(v bool)`

SetIsHdr sets IsHdr field to given value.

### HasIsHdr

`func (o *VideoInfo) HasIsHdr() bool`

HasIsHdr returns a boolean if a field has been set.

### GetIsMultiChannelAudio

`func (o *VideoInfo) GetIsMultiChannelAudio() bool`

GetIsMultiChannelAudio returns the IsMultiChannelAudio field if non-nil, zero value otherwise.

### GetIsMultiChannelAudioOk

`func (o *VideoInfo) GetIsMultiChannelAudioOk() (*bool, bool)`

GetIsMultiChannelAudioOk returns a tuple with the IsMultiChannelAudio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiChannelAudio

`func (o *VideoInfo) SetIsMultiChannelAudio(v bool)`

SetIsMultiChannelAudio sets IsMultiChannelAudio field to given value.

### HasIsMultiChannelAudio

`func (o *VideoInfo) HasIsMultiChannelAudio() bool`

HasIsMultiChannelAudio returns a boolean if a field has been set.

### GetWidth

`func (o *VideoInfo) GetWidth() int32`

GetWidth returns the Width field if non-nil, zero value otherwise.

### GetWidthOk

`func (o *VideoInfo) GetWidthOk() (*int32, bool)`

GetWidthOk returns a tuple with the Width field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWidth

`func (o *VideoInfo) SetWidth(v int32)`

SetWidth sets Width field to given value.

### HasWidth

`func (o *VideoInfo) HasWidth() bool`

HasWidth returns a boolean if a field has been set.

### GetHeight

`func (o *VideoInfo) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *VideoInfo) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *VideoInfo) SetHeight(v int32)`

SetHeight sets Height field to given value.

### HasHeight

`func (o *VideoInfo) HasHeight() bool`

HasHeight returns a boolean if a field has been set.

### GetFps

`func (o *VideoInfo) GetFps() float32`

GetFps returns the Fps field if non-nil, zero value otherwise.

### GetFpsOk

`func (o *VideoInfo) GetFpsOk() (*float32, bool)`

GetFpsOk returns a tuple with the Fps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFps

`func (o *VideoInfo) SetFps(v float32)`

SetFps sets Fps field to given value.

### HasFps

`func (o *VideoInfo) HasFps() bool`

HasFps returns a boolean if a field has been set.

### GetCodecName

`func (o *VideoInfo) GetCodecName() string`

GetCodecName returns the CodecName field if non-nil, zero value otherwise.

### GetCodecNameOk

`func (o *VideoInfo) GetCodecNameOk() (*string, bool)`

GetCodecNameOk returns a tuple with the CodecName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodecName

`func (o *VideoInfo) SetCodecName(v string)`

SetCodecName sets CodecName field to given value.

### HasCodecName

`func (o *VideoInfo) HasCodecName() bool`

HasCodecName returns a boolean if a field has been set.

### GetCodecType

`func (o *VideoInfo) GetCodecType() string`

GetCodecType returns the CodecType field if non-nil, zero value otherwise.

### GetCodecTypeOk

`func (o *VideoInfo) GetCodecTypeOk() (*string, bool)`

GetCodecTypeOk returns a tuple with the CodecType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodecType

`func (o *VideoInfo) SetCodecType(v string)`

SetCodecType sets CodecType field to given value.

### HasCodecType

`func (o *VideoInfo) HasCodecType() bool`

HasCodecType returns a boolean if a field has been set.

### GetResolutionHuman

`func (o *VideoInfo) GetResolutionHuman() string`

GetResolutionHuman returns the ResolutionHuman field if non-nil, zero value otherwise.

### GetResolutionHumanOk

`func (o *VideoInfo) GetResolutionHumanOk() (*string, bool)`

GetResolutionHumanOk returns a tuple with the ResolutionHuman field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionHuman

`func (o *VideoInfo) SetResolutionHuman(v string)`

SetResolutionHuman sets ResolutionHuman field to given value.

### HasResolutionHuman

`func (o *VideoInfo) HasResolutionHuman() bool`

HasResolutionHuman returns a boolean if a field has been set.

### GetBitrate

`func (o *VideoInfo) GetBitrate() string`

GetBitrate returns the Bitrate field if non-nil, zero value otherwise.

### GetBitrateOk

`func (o *VideoInfo) GetBitrateOk() (*string, bool)`

GetBitrateOk returns a tuple with the Bitrate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBitrate

`func (o *VideoInfo) SetBitrate(v string)`

SetBitrate sets Bitrate field to given value.

### HasBitrate

`func (o *VideoInfo) HasBitrate() bool`

HasBitrate returns a boolean if a field has been set.

### GetDisplayAspectRation

`func (o *VideoInfo) GetDisplayAspectRation() string`

GetDisplayAspectRation returns the DisplayAspectRation field if non-nil, zero value otherwise.

### GetDisplayAspectRationOk

`func (o *VideoInfo) GetDisplayAspectRationOk() (*string, bool)`

GetDisplayAspectRationOk returns a tuple with the DisplayAspectRation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayAspectRation

`func (o *VideoInfo) SetDisplayAspectRation(v string)`

SetDisplayAspectRation sets DisplayAspectRation field to given value.

### HasDisplayAspectRation

`func (o *VideoInfo) HasDisplayAspectRation() bool`

HasDisplayAspectRation returns a boolean if a field has been set.

### GetAspectRatio

`func (o *VideoInfo) GetAspectRatio() float32`

GetAspectRatio returns the AspectRatio field if non-nil, zero value otherwise.

### GetAspectRatioOk

`func (o *VideoInfo) GetAspectRatioOk() (*float32, bool)`

GetAspectRatioOk returns a tuple with the AspectRatio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAspectRatio

`func (o *VideoInfo) SetAspectRatio(v float32)`

SetAspectRatio sets AspectRatio field to given value.

### HasAspectRatio

`func (o *VideoInfo) HasAspectRatio() bool`

HasAspectRatio returns a boolean if a field has been set.

### GetDuration

`func (o *VideoInfo) GetDuration() float32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *VideoInfo) GetDurationOk() (*float32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *VideoInfo) SetDuration(v float32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *VideoInfo) HasDuration() bool`

HasDuration returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


