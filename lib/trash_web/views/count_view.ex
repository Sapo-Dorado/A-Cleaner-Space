defmodule TrashWeb.CountView do
  use TrashWeb, :view

  def render("show.json", %{count: count}) do
    %{count: count}
  end
end
