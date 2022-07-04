# CreateCompress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MerchantGivenId** | Pointer to **string** |  | [optional] 
**CallbackUrl** | Pointer to **NullableString** |  | [optional] 
**Sizes** | Pointer to **[]int32** |  | [optional] 
**Source** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 
**Destination** | Pointer to [**SourceTranscode**](SourceTranscode.md) |  | [optional] 

## Methods

### NewCreateCompress

`func NewCreateCompress() *CreateCompress`

NewCreateCompress instantiates a new CreateCompress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCompressWithDefaults

`func NewCreateCompressWithDefaults() *CreateCompress`

NewCreateCompressWithDefaults instantiates a new CreateCompress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMerchantGivenId

`func (o *CreateCompress) GetMerchantGivenId() string`

GetMerchantGivenId returns the MerchantGivenId field if non-nil, zero value otherwise.

### GetMerchantGivenIdOk

`func (o *CreateCompress) GetMerchantGivenIdOk() (*string, bool)`

GetMerchantGivenIdOk returns a tuple with the MerchantGivenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantGivenId

`func (o *CreateCompress) SetMerchantGivenId(v string)`

SetMerchantGivenId sets MerchantGivenId field to given value.

### HasMerchantGivenId

`func (o *CreateCompress) HasMerchantGivenId() bool`

HasMerchantGivenId returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *CreateCompress) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *CreateCompress) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *CreateCompress) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *CreateCompress) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### SetCallbackUrlNil

`func (o *CreateCompress) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *CreateCompress) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetSizes

`func (o *CreateCompress) GetSizes() []int32`

GetSizes returns the Sizes field if non-nil, zero value otherwise.

### GetSizesOk

`func (o *CreateCompress) GetSizesOk() (*[]int32, bool)`

GetSizesOk returns a tuple with the Sizes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSizes

`func (o *CreateCompress) SetSizes(v []int32)`

SetSizes sets Sizes field to given value.

### HasSizes

`func (o *CreateCompress) HasSizes() bool`

HasSizes returns a boolean if a field has been set.

### GetSource

`func (o *CreateCompress) GetSource() SourceTranscode`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateCompress) GetSourceOk() (*SourceTranscode, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateCompress) SetSource(v SourceTranscode)`

SetSource sets Source field to given value.

### HasSource

`func (o *CreateCompress) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDestination

`func (o *CreateCompress) GetDestination() SourceTranscode`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *CreateCompress) GetDestinationOk() (*SourceTranscode, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *CreateCompress) SetDestination(v SourceTranscode)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *CreateCompress) HasDestination() bool`

HasDestination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


