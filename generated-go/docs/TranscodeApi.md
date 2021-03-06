# \TranscodeApi

All URIs are relative to *https://api.goovi.id/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CompressPost**](TranscodeApi.md#CompressPost) | **Post** /compress | 
[**TranscodeGet**](TranscodeApi.md#TranscodeGet) | **Get** /transcode | 



## CompressPost

> CompressPost(ctx).CreateCompress(createCompress).Execute()





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
    createCompress := *openapiclient.NewCreateCompress() // CreateCompress |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TranscodeApi.CompressPost(context.Background()).CreateCompress(createCompress).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TranscodeApi.CompressPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCompressPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompress** | [**CreateCompress**](CreateCompress.md) |  | 

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


## TranscodeGet

> TranscodeQueue TranscodeGet(ctx).Id(id).Execute()





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
    id := "id_example" // string | Identifier or the object (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TranscodeApi.TranscodeGet(context.Background()).Id(id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TranscodeApi.TranscodeGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TranscodeGet`: TranscodeQueue
    fmt.Fprintf(os.Stdout, "Response from `TranscodeApi.TranscodeGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTranscodeGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | Identifier or the object | 

### Return type

[**TranscodeQueue**](TranscodeQueue.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

