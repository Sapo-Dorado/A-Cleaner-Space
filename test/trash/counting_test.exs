defmodule Trash.CountingTest do
  use Trash.DataCase

  alias Trash.Counting

  describe "counts" do
    alias Trash.Counting.Count

    @valid_attrs %{count: 42}
    @update_attrs %{count: 43}
    @invalid_attrs %{count: nil}

    def count_fixture(attrs \\ %{}) do
      {:ok, count} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Counting.create_count()

      count
    end

    test "list_counts/0 returns all counts" do
      count = count_fixture()
      assert Counting.list_counts() == [count]
    end

    test "get_count!/1 returns the count with given id" do
      count = count_fixture()
      assert Counting.get_count!(count.id) == count
    end

    test "create_count/1 with valid data creates a count" do
      assert {:ok, %Count{} = count} = Counting.create_count(@valid_attrs)
      assert count.count == 42
    end

    test "create_count/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Counting.create_count(@invalid_attrs)
    end

    test "update_count/2 with valid data updates the count" do
      count = count_fixture()
      assert {:ok, %Count{} = count} = Counting.update_count(count, @update_attrs)
      assert count.count == 43
    end

    test "update_count/2 with invalid data returns error changeset" do
      count = count_fixture()
      assert {:error, %Ecto.Changeset{}} = Counting.update_count(count, @invalid_attrs)
      assert count == Counting.get_count!(count.id)
    end

    test "delete_count/1 deletes the count" do
      count = count_fixture()
      assert {:ok, %Count{}} = Counting.delete_count(count)
      assert_raise Ecto.NoResultsError, fn -> Counting.get_count!(count.id) end
    end

    test "change_count/1 returns a count changeset" do
      count = count_fixture()
      assert %Ecto.Changeset{} = Counting.change_count(count)
    end
  end
end
