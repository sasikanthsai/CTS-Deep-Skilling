using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApiHandson.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        var errorMessage = context.Exception.ToString();

        File.AppendAllText(
            "ErrorLog.txt",
            $"{DateTime.Now} : {errorMessage}{Environment.NewLine}");

        context.Result = new ObjectResult("Internal Server Error")
        {
            StatusCode = 500
        };

        context.ExceptionHandled = true;
    }
}