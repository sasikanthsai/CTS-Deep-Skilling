using Microsoft.AspNetCore.Mvc;

namespace WebApiHandson.Controllers;

[ApiController]
[Route("api/Emp")]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new[] { "Value1", "Value2" });
    }

    [HttpPost]
    public IActionResult Post()
    {
        return Ok("Data Added");
    }

    [HttpPut]
    public IActionResult Put()
    {
        return Ok("Data Updated");
    }

    [HttpDelete]
    public IActionResult Delete()
    {
        return Ok("Data Deleted");
    }
}