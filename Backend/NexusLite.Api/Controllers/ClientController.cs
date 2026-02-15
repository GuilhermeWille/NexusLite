using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

public class ClientController : BaseController<Client>
{
    public ClientController(AppDbContext contex) : base(contex)
    {

    }

}