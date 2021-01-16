defmodule Trash.Counting do
  import Ecto.Query, warn: false
  alias Trash.Repo

  alias Trash.Counting.Count
  def get_count() do
    %Count{count: count} = Repo.get!(Count, 1)
    count
  end
  def create_count() do
    %Count{}
    |> Count.changeset(%{count: 0})
    |> Repo.insert()
  end

  def inc_count() do
    {1, [%Count{count: count}]} =
      from(c in Count, where: c.id == 1, select: [:count])
      |> Repo.update_all(inc: [count: 1])
    count
  end

end
