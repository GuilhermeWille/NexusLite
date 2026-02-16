using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using NexusLite.Api.Models;
using NexusLite.Api.Data;

namespace NexusLite.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseController<T> : ControllerBase where T : class, IEntity
{
	protected readonly AppDbContext _context;

	public BaseController(AppDbContext context)
	{
		_context = context;
	}

	[HttpPost]
	public async Task<ActionResult<T>> PostEntity(T t)
	{
		_context.Set<T>().Add(t);
		await _context.SaveChangesAsync();
		return CreatedAtAction(nameof(GetById), new { id = t.Id }, t);
	}

	[HttpGet]
	public async Task<ActionResult<List<T>>> GetAll() => Ok(await _context.Set<T>().ToListAsync());

	[HttpGet("{id}")]
	public async Task<ActionResult<T>> GetById(int id)
	{
		var entity = await _findEntity(id);
		return entity == null ? NotFound() : Ok(entity);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> PutEntity(int id, T entity)
	{
		if (id != entity.Id) return BadRequest("invalid ID");
		
		_context.Entry(entity).State = EntityState.Modified;

		try
		{
			_context.Set<T>().Update(entity);
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
        {
			var exists = await _findEntity(id);
			if (exists == null) return NotFound();
			else throw;
        }
		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteEntity(int id)
	{
		var entity = await _findEntity(id);
		if (entity == null) return NotFound();

		_context.Set<T>().Remove(entity);
        await _context.SaveChangesAsync();
        return NoContent();
	}

	protected async Task<T?> _findEntity(int id)
	{
		return await _context.Set<T>().FindAsync(id);
	}

}