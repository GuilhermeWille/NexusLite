using System;
using System.ComponentModel.DataAnnotations;

namespace NexusLite.Api.Models
{
	public class Finance : IEntity
    {
		public int Id { get; set; }
		public string Description { get; set; } = string.Empty;
		public DateTime Date { get; set; } = DateTime.Now;
		public decimal Value { get; set; }
		public bool IsIncome { get; set; }

	}
}