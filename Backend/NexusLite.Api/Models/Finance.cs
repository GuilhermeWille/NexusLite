using System;
using System.ComponentModel.DataAnnotations;

namespace NexusLite.Api.Models
{
	public class Finance
	{
		public int Id { get; set; }
		public DateTime Date { get; set; } = DateTime.Now;
		public decimal Income { get; set; }
		public decimal Spent { get; set; }
	}
}