using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClientController : ControllerBase
{
    private readonly AppDbContext _context;

    public ClientController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<Client>> PostClient(Client client)
    {
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetClientsId), new { id = client.Id }, client);
    }

    [HttpGet]
    public async Task<ActionResult<List<Client>>> GetClients()
    {
        var clients = await _context.Clients.ToListAsync();
        return Ok(clients);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Client>> GetClientsId(int? id) 
    {
        var clientsId = await _findClient(id);
        
        if(clientsId == null) return NotFound();
        
        return Ok(clientsId);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Client>> DeleteClient(int? id)
    {
        var clientsId = await _findClient(id);

        if(clientsId == null) return NotFound();

        return NoContent();
    }

    private async Task<Client?> _findClient(int id)
    {
        return await _context.Clients.FindAsync(id);
    }
}