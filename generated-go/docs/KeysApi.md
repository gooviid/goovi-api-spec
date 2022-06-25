# \KeysApi

All URIs are relative to *https://api.goovi.id/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TranscodePost**](KeysApi.md#TranscodePost) | **Post** /transcode | 



## TranscodePost

> TranscodePost(ctx).CreateTranscode(createTranscode).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    createTranscode := *openapiclient.NewCreateTranscode() // CreateTranscode |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.KeysApi.TranscodePost(context.Background()).CreateTranscode(createTranscode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `KeysApi.TranscodePost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTranscodePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTranscode** | [**CreateTranscode**](CreateTranscode.md) |  | 

### Return type

 (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

