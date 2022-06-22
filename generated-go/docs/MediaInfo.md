# MediaInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**Mime** | Pointer to **string** |  | [optional] 
**Size** | Pointer to **int32** |  | [optional] 
**SizeHuman** | Pointer to **string** |  | [optional] 
**RemoteUrl** | Pointer to **string** |  | [optional] 
**RemoteRelativeUrl** | Pointer to **string** |  | [optional] 
**Video** | Pointer to [**NullableVideoInfo**](VideoInfo.md) |  | [optional] 
**Audio** | Pointer to [**NullableAudioInfo**](AudioInfo.md) |  | [optional] 
**Image** | Pointer to [**NullableImageInfo**](ImageInfo.md) |  | [optional] 
**AdaptiveStreaming** | Pointer to [**NullableAdaptiveStreamingInfo**](AdaptiveStreamingInfo.md) |  | [optional] 

## Methods

### NewMediaInfo

`func NewMediaInfo() *MediaInfo`

NewMediaInfo instantiates a new MediaInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMediaInfoWithDefaults

`func NewMediaInfoWithDefaults() *MediaInfo`

NewMediaInfoWithDefaults instantiates a new MediaInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *MediaInfo) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *MediaInfo) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *MediaInfo) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *MediaInfo) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetMime

`func (o *MediaInfo) GetMime() string`

GetMime returns the Mime field if non-nil, zero value otherwise.

### GetMimeOk

`func (o *MediaInfo) GetMimeOk() (*string, bool)`

GetMimeOk returns a tuple with the Mime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMime

`func (o *MediaInfo) SetMime(v string)`

SetMime sets Mime field to given value.

### HasMime

`func (o *MediaInfo) HasMime() bool`

HasMime returns a boolean if a field has been set.

### GetSize

`func (o *MediaInfo) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *MediaInfo) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *MediaInfo) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *MediaInfo) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetSizeHuman

`func (o *MediaInfo) GetSizeHuman() string`

GetSizeHuman returns the SizeHuman field if non-nil, zero value otherwise.

### GetSizeHumanOk

`func (o *MediaInfo) GetSizeHumanOk() (*string, bool)`

GetSizeHumanOk returns a tuple with the SizeHuman field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSizeHuman

`func (o *MediaInfo) SetSizeHuman(v string)`

SetSizeHuman sets SizeHuman field to given value.

### HasSizeHuman

`func (o *MediaInfo) HasSizeHuman() bool`

HasSizeHuman returns a boolean if a field has been set.

### GetRemoteUrl

`func (o *MediaInfo) GetRemoteUrl() string`

GetRemoteUrl returns the RemoteUrl field if non-nil, zero value otherwise.

### GetRemoteUrlOk

`func (o *MediaInfo) GetRemoteUrlOk() (*string, bool)`

GetRemoteUrlOk returns a tuple with the RemoteUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoteUrl

`func (o *MediaInfo) SetRemoteUrl(v string)`

SetRemoteUrl sets RemoteUrl field to given value.

### HasRemoteUrl

`func (o *MediaInfo) HasRemoteUrl() bool`

HasRemoteUrl returns a boolean if a field has been set.

### GetRemoteRelativeUrl

`func (o *MediaInfo) GetRemoteRelativeUrl() string`

GetRemoteRelativeUrl returns the RemoteRelativeUrl field if non-nil, zero value otherwise.

### GetRemoteRelativeUrlOk

`func (o *MediaInfo) GetRemoteRelativeUrlOk() (*string, bool)`

GetRemoteRelativeUrlOk returns a tuple with the RemoteRelativeUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoteRelativeUrl

`func (o *MediaInfo) SetRemoteRelativeUrl(v string)`

SetRemoteRelativeUrl sets RemoteRelativeUrl field to given value.

### HasRemoteRelativeUrl

`func (o *MediaInfo) HasRemoteRelativeUrl() bool`

HasRemoteRelativeUrl returns a boolean if a field has been set.

### GetVideo

`func (o *MediaInfo) GetVideo() VideoInfo`

GetVideo returns the Video field if non-nil, zero value otherwise.

### GetVideoOk

`func (o *MediaInfo) GetVideoOk() (*VideoInfo, bool)`

GetVideoOk returns a tuple with the Video field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVideo

`func (o *MediaInfo) SetVideo(v VideoInfo)`

SetVideo sets Video field to given value.

### HasVideo

`func (o *MediaInfo) HasVideo() bool`

HasVideo returns a boolean if a field has been set.

### SetVideoNil

`func (o *MediaInfo) SetVideoNil(b bool)`

 SetVideoNil sets the value for Video to be an explicit nil

### UnsetVideo
`func (o *MediaInfo) UnsetVideo()`

UnsetVideo ensures that no value is present for Video, not even an explicit nil
### GetAudio

`func (o *MediaInfo) GetAudio() AudioInfo`

GetAudio returns the Audio field if non-nil, zero value otherwise.

### GetAudioOk

`func (o *MediaInfo) GetAudioOk() (*AudioInfo, bool)`

GetAudioOk returns a tuple with the Audio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAudio

`func (o *MediaInfo) SetAudio(v AudioInfo)`

SetAudio sets Audio field to given value.

### HasAudio

`func (o *MediaInfo) HasAudio() bool`

HasAudio returns a boolean if a field has been set.

### SetAudioNil

`func (o *MediaInfo) SetAudioNil(b bool)`

 SetAudioNil sets the value for Audio to be an explicit nil

### UnsetAudio
`func (o *MediaInfo) UnsetAudio()`

UnsetAudio ensures that no value is present for Audio, not even an explicit nil
### GetImage

`func (o *MediaInfo) GetImage() ImageInfo`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *MediaInfo) GetImageOk() (*ImageInfo, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *MediaInfo) SetImage(v ImageInfo)`

SetImage sets Image field to given value.

### HasImage

`func (o *MediaInfo) HasImage() bool`

HasImage returns a boolean if a field has been set.

### SetImageNil

`func (o *MediaInfo) SetImageNil(b bool)`

 SetImageNil sets the value for Image to be an explicit nil

### UnsetImage
`func (o *MediaInfo) UnsetImage()`

UnsetImage ensures that no value is present for Image, not even an explicit nil
### GetAdaptiveStreaming

`func (o *MediaInfo) GetAdaptiveStreaming() AdaptiveStreamingInfo`

GetAdaptiveStreaming returns the AdaptiveStreaming field if non-nil, zero value otherwise.

### GetAdaptiveStreamingOk

`func (o *MediaInfo) GetAdaptiveStreamingOk() (*AdaptiveStreamingInfo, bool)`

GetAdaptiveStreamingOk returns a tuple with the AdaptiveStreaming field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdaptiveStreaming

`func (o *MediaInfo) SetAdaptiveStreaming(v AdaptiveStreamingInfo)`

SetAdaptiveStreaming sets AdaptiveStreaming field to given value.

### HasAdaptiveStreaming

`func (o *MediaInfo) HasAdaptiveStreaming() bool`

HasAdaptiveStreaming returns a boolean if a field has been set.

### SetAdaptiveStreamingNil

`func (o *MediaInfo) SetAdaptiveStreamingNil(b bool)`

 SetAdaptiveStreamingNil sets the value for AdaptiveStreaming to be an explicit nil

### UnsetAdaptiveStreaming
`func (o *MediaInfo) UnsetAdaptiveStreaming()`

UnsetAdaptiveStreaming ensures that no value is present for AdaptiveStreaming, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


