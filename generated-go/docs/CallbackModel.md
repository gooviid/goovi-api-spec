# CallbackModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsSuccess** | Pointer to **bool** |  | [optional] 
**QueueId** | Pointer to **string** |  | [optional] 
**Error** | Pointer to [**NullableTranscodeError**](TranscodeError.md) |  | [optional] 
**Media** | Pointer to [**[]MediaInfo**](MediaInfo.md) |  | [optional] 

## Methods

### NewCallbackModel

`func NewCallbackModel() *CallbackModel`

NewCallbackModel instantiates a new CallbackModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackModelWithDefaults

`func NewCallbackModelWithDefaults() *CallbackModel`

NewCallbackModelWithDefaults instantiates a new CallbackModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsSuccess

`func (o *CallbackModel) GetIsSuccess() bool`

GetIsSuccess returns the IsSuccess field if non-nil, zero value otherwise.

### GetIsSuccessOk

`func (o *CallbackModel) GetIsSuccessOk() (*bool, bool)`

GetIsSuccessOk returns a tuple with the IsSuccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSuccess

`func (o *CallbackModel) SetIsSuccess(v bool)`

SetIsSuccess sets IsSuccess field to given value.

### HasIsSuccess

`func (o *CallbackModel) HasIsSuccess() bool`

HasIsSuccess returns a boolean if a field has been set.

### GetQueueId

`func (o *CallbackModel) GetQueueId() string`

GetQueueId returns the QueueId field if non-nil, zero value otherwise.

### GetQueueIdOk

`func (o *CallbackModel) GetQueueIdOk() (*string, bool)`

GetQueueIdOk returns a tuple with the QueueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueId

`func (o *CallbackModel) SetQueueId(v string)`

SetQueueId sets QueueId field to given value.

### HasQueueId

`func (o *CallbackModel) HasQueueId() bool`

HasQueueId returns a boolean if a field has been set.

### GetError

`func (o *CallbackModel) GetError() TranscodeError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *CallbackModel) GetErrorOk() (*TranscodeError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *CallbackModel) SetError(v TranscodeError)`

SetError sets Error field to given value.

### HasError

`func (o *CallbackModel) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *CallbackModel) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *CallbackModel) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil
### GetMedia

`func (o *CallbackModel) GetMedia() []MediaInfo`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *CallbackModel) GetMediaOk() (*[]MediaInfo, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *CallbackModel) SetMedia(v []MediaInfo)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *CallbackModel) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### SetMediaNil

`func (o *CallbackModel) SetMediaNil(b bool)`

 SetMediaNil sets the value for Media to be an explicit nil

### UnsetMedia
`func (o *CallbackModel) UnsetMedia()`

UnsetMedia ensures that no value is present for Media, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


