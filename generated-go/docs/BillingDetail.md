# BillingDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Qty** | Pointer to **int32** |  | [optional] 
**Method** | Pointer to **string** |  | [optional] 
**Total** | Pointer to **float32** |  | [optional] 
**Price** | Pointer to **float32** |  | [optional] 

## Methods

### NewBillingDetail

`func NewBillingDetail() *BillingDetail`

NewBillingDetail instantiates a new BillingDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingDetailWithDefaults

`func NewBillingDetailWithDefaults() *BillingDetail`

NewBillingDetailWithDefaults instantiates a new BillingDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQty

`func (o *BillingDetail) GetQty() int32`

GetQty returns the Qty field if non-nil, zero value otherwise.

### GetQtyOk

`func (o *BillingDetail) GetQtyOk() (*int32, bool)`

GetQtyOk returns a tuple with the Qty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQty

`func (o *BillingDetail) SetQty(v int32)`

SetQty sets Qty field to given value.

### HasQty

`func (o *BillingDetail) HasQty() bool`

HasQty returns a boolean if a field has been set.

### GetMethod

`func (o *BillingDetail) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *BillingDetail) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *BillingDetail) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *BillingDetail) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetTotal

`func (o *BillingDetail) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *BillingDetail) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *BillingDetail) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *BillingDetail) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetPrice

`func (o *BillingDetail) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BillingDetail) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BillingDetail) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *BillingDetail) HasPrice() bool`

HasPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


