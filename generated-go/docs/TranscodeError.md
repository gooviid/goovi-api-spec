# TranscodeError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorType** | Pointer to **string** |  | [optional] 
**ErrorCause** | Pointer to **string** |  | [optional] 
**ErrorAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewTranscodeError

`func NewTranscodeError() *TranscodeError`

NewTranscodeError instantiates a new TranscodeError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranscodeErrorWithDefaults

`func NewTranscodeErrorWithDefaults() *TranscodeError`

NewTranscodeErrorWithDefaults instantiates a new TranscodeError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorType

`func (o *TranscodeError) GetErrorType() string`

GetErrorType returns the ErrorType field if non-nil, zero value otherwise.

### GetErrorTypeOk

`func (o *TranscodeError) GetErrorTypeOk() (*string, bool)`

GetErrorTypeOk returns a tuple with the ErrorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorType

`func (o *TranscodeError) SetErrorType(v string)`

SetErrorType sets ErrorType field to given value.

### HasErrorType

`func (o *TranscodeError) HasErrorType() bool`

HasErrorType returns a boolean if a field has been set.

### GetErrorCause

`func (o *TranscodeError) GetErrorCause() string`

GetErrorCause returns the ErrorCause field if non-nil, zero value otherwise.

### GetErrorCauseOk

`func (o *TranscodeError) GetErrorCauseOk() (*string, bool)`

GetErrorCauseOk returns a tuple with the ErrorCause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCause

`func (o *TranscodeError) SetErrorCause(v string)`

SetErrorCause sets ErrorCause field to given value.

### HasErrorCause

`func (o *TranscodeError) HasErrorCause() bool`

HasErrorCause returns a boolean if a field has been set.

### GetErrorAt

`func (o *TranscodeError) GetErrorAt() time.Time`

GetErrorAt returns the ErrorAt field if non-nil, zero value otherwise.

### GetErrorAtOk

`func (o *TranscodeError) GetErrorAtOk() (*time.Time, bool)`

GetErrorAtOk returns a tuple with the ErrorAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorAt

`func (o *TranscodeError) SetErrorAt(v time.Time)`

SetErrorAt sets ErrorAt field to given value.

### HasErrorAt

`func (o *TranscodeError) HasErrorAt() bool`

HasErrorAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


