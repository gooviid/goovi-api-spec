# TranscodeQueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueueId** | Pointer to **string** |  | [optional] 
**MerchantGivenId** | Pointer to **string** |  | [optional] 
**QueueStatus** | Pointer to **string** |  | [optional] 
**ChargeStatus** | Pointer to **string** |  | [optional] 
**TotalPrice** | Pointer to **float32** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**ResolutionTarget** | Pointer to **[]string** |  | [optional] 
**FileTarget** | Pointer to **[]string** |  | [optional] 
**RequestDuration** | Pointer to **int32** |  | [optional] 
**Source** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 
**Destination** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 
**BillingDetail** | Pointer to [**[]BillingDetail**](BillingDetail.md) |  | [optional] 
**Media** | Pointer to [**MediaInfo**](MediaInfo.md) |  | [optional] 
**TranscodeMeta** | Pointer to [**NullableTranscodeMeta**](TranscodeMeta.md) |  | [optional] 
**Error** | Pointer to [**NullableTranscodeError**](TranscodeError.md) |  | [optional] 

## Methods

### NewTranscodeQueue

`func NewTranscodeQueue() *TranscodeQueue`

NewTranscodeQueue instantiates a new TranscodeQueue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranscodeQueueWithDefaults

`func NewTranscodeQueueWithDefaults() *TranscodeQueue`

NewTranscodeQueueWithDefaults instantiates a new TranscodeQueue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueueId

`func (o *TranscodeQueue) GetQueueId() string`

GetQueueId returns the QueueId field if non-nil, zero value otherwise.

### GetQueueIdOk

`func (o *TranscodeQueue) GetQueueIdOk() (*string, bool)`

GetQueueIdOk returns a tuple with the QueueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueId

`func (o *TranscodeQueue) SetQueueId(v string)`

SetQueueId sets QueueId field to given value.

### HasQueueId

`func (o *TranscodeQueue) HasQueueId() bool`

HasQueueId returns a boolean if a field has been set.

### GetMerchantGivenId

`func (o *TranscodeQueue) GetMerchantGivenId() string`

GetMerchantGivenId returns the MerchantGivenId field if non-nil, zero value otherwise.

### GetMerchantGivenIdOk

`func (o *TranscodeQueue) GetMerchantGivenIdOk() (*string, bool)`

GetMerchantGivenIdOk returns a tuple with the MerchantGivenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantGivenId

`func (o *TranscodeQueue) SetMerchantGivenId(v string)`

SetMerchantGivenId sets MerchantGivenId field to given value.

### HasMerchantGivenId

`func (o *TranscodeQueue) HasMerchantGivenId() bool`

HasMerchantGivenId returns a boolean if a field has been set.

### GetQueueStatus

`func (o *TranscodeQueue) GetQueueStatus() string`

GetQueueStatus returns the QueueStatus field if non-nil, zero value otherwise.

### GetQueueStatusOk

`func (o *TranscodeQueue) GetQueueStatusOk() (*string, bool)`

GetQueueStatusOk returns a tuple with the QueueStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueStatus

`func (o *TranscodeQueue) SetQueueStatus(v string)`

SetQueueStatus sets QueueStatus field to given value.

### HasQueueStatus

`func (o *TranscodeQueue) HasQueueStatus() bool`

HasQueueStatus returns a boolean if a field has been set.

### GetChargeStatus

`func (o *TranscodeQueue) GetChargeStatus() string`

GetChargeStatus returns the ChargeStatus field if non-nil, zero value otherwise.

### GetChargeStatusOk

`func (o *TranscodeQueue) GetChargeStatusOk() (*string, bool)`

GetChargeStatusOk returns a tuple with the ChargeStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeStatus

`func (o *TranscodeQueue) SetChargeStatus(v string)`

SetChargeStatus sets ChargeStatus field to given value.

### HasChargeStatus

`func (o *TranscodeQueue) HasChargeStatus() bool`

HasChargeStatus returns a boolean if a field has been set.

### GetTotalPrice

`func (o *TranscodeQueue) GetTotalPrice() float32`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *TranscodeQueue) GetTotalPriceOk() (*float32, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *TranscodeQueue) SetTotalPrice(v float32)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *TranscodeQueue) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetCreatedAt

`func (o *TranscodeQueue) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TranscodeQueue) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TranscodeQueue) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *TranscodeQueue) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetResolutionTarget

`func (o *TranscodeQueue) GetResolutionTarget() []string`

GetResolutionTarget returns the ResolutionTarget field if non-nil, zero value otherwise.

### GetResolutionTargetOk

`func (o *TranscodeQueue) GetResolutionTargetOk() (*[]string, bool)`

GetResolutionTargetOk returns a tuple with the ResolutionTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolutionTarget

`func (o *TranscodeQueue) SetResolutionTarget(v []string)`

SetResolutionTarget sets ResolutionTarget field to given value.

### HasResolutionTarget

`func (o *TranscodeQueue) HasResolutionTarget() bool`

HasResolutionTarget returns a boolean if a field has been set.

### GetFileTarget

`func (o *TranscodeQueue) GetFileTarget() []string`

GetFileTarget returns the FileTarget field if non-nil, zero value otherwise.

### GetFileTargetOk

`func (o *TranscodeQueue) GetFileTargetOk() (*[]string, bool)`

GetFileTargetOk returns a tuple with the FileTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileTarget

`func (o *TranscodeQueue) SetFileTarget(v []string)`

SetFileTarget sets FileTarget field to given value.

### HasFileTarget

`func (o *TranscodeQueue) HasFileTarget() bool`

HasFileTarget returns a boolean if a field has been set.

### GetRequestDuration

`func (o *TranscodeQueue) GetRequestDuration() int32`

GetRequestDuration returns the RequestDuration field if non-nil, zero value otherwise.

### GetRequestDurationOk

`func (o *TranscodeQueue) GetRequestDurationOk() (*int32, bool)`

GetRequestDurationOk returns a tuple with the RequestDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestDuration

`func (o *TranscodeQueue) SetRequestDuration(v int32)`

SetRequestDuration sets RequestDuration field to given value.

### HasRequestDuration

`func (o *TranscodeQueue) HasRequestDuration() bool`

HasRequestDuration returns a boolean if a field has been set.

### GetSource

`func (o *TranscodeQueue) GetSource() SourceTranscode`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TranscodeQueue) GetSourceOk() (*SourceTranscode, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TranscodeQueue) SetSource(v SourceTranscode)`

SetSource sets Source field to given value.

### HasSource

`func (o *TranscodeQueue) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDestination

`func (o *TranscodeQueue) GetDestination() SourceTranscode`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *TranscodeQueue) GetDestinationOk() (*SourceTranscode, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *TranscodeQueue) SetDestination(v SourceTranscode)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *TranscodeQueue) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetBillingDetail

`func (o *TranscodeQueue) GetBillingDetail() []BillingDetail`

GetBillingDetail returns the BillingDetail field if non-nil, zero value otherwise.

### GetBillingDetailOk

`func (o *TranscodeQueue) GetBillingDetailOk() (*[]BillingDetail, bool)`

GetBillingDetailOk returns a tuple with the BillingDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingDetail

`func (o *TranscodeQueue) SetBillingDetail(v []BillingDetail)`

SetBillingDetail sets BillingDetail field to given value.

### HasBillingDetail

`func (o *TranscodeQueue) HasBillingDetail() bool`

HasBillingDetail returns a boolean if a field has been set.

### GetMedia

`func (o *TranscodeQueue) GetMedia() MediaInfo`

GetMedia returns the Media field if non-nil, zero value otherwise.

### GetMediaOk

`func (o *TranscodeQueue) GetMediaOk() (*MediaInfo, bool)`

GetMediaOk returns a tuple with the Media field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedia

`func (o *TranscodeQueue) SetMedia(v MediaInfo)`

SetMedia sets Media field to given value.

### HasMedia

`func (o *TranscodeQueue) HasMedia() bool`

HasMedia returns a boolean if a field has been set.

### GetTranscodeMeta

`func (o *TranscodeQueue) GetTranscodeMeta() TranscodeMeta`

GetTranscodeMeta returns the TranscodeMeta field if non-nil, zero value otherwise.

### GetTranscodeMetaOk

`func (o *TranscodeQueue) GetTranscodeMetaOk() (*TranscodeMeta, bool)`

GetTranscodeMetaOk returns a tuple with the TranscodeMeta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranscodeMeta

`func (o *TranscodeQueue) SetTranscodeMeta(v TranscodeMeta)`

SetTranscodeMeta sets TranscodeMeta field to given value.

### HasTranscodeMeta

`func (o *TranscodeQueue) HasTranscodeMeta() bool`

HasTranscodeMeta returns a boolean if a field has been set.

### SetTranscodeMetaNil

`func (o *TranscodeQueue) SetTranscodeMetaNil(b bool)`

 SetTranscodeMetaNil sets the value for TranscodeMeta to be an explicit nil

### UnsetTranscodeMeta
`func (o *TranscodeQueue) UnsetTranscodeMeta()`

UnsetTranscodeMeta ensures that no value is present for TranscodeMeta, not even an explicit nil
### GetError

`func (o *TranscodeQueue) GetError() TranscodeError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *TranscodeQueue) GetErrorOk() (*TranscodeError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *TranscodeQueue) SetError(v TranscodeError)`

SetError sets Error field to given value.

### HasError

`func (o *TranscodeQueue) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *TranscodeQueue) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *TranscodeQueue) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


