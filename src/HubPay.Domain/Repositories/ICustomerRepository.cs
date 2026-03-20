using HubPay.Domain.Entities;

namespace HubPay.Domain.Repositories;

public interface ICustomerRepository
{
    Task<Customer?> GetByIdAsync(Guid id);
    Task<IReadOnlyList<Customer>> ListAsync(int take = 20);
    Task AddAsync(Customer customer);
}

