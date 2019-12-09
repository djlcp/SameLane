class ApplicationPolicy
  attr_reader :devise, :record

  def initialize(devise, record)
    @devise = devise
    @record = record
  end

  def index?
    false
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  class Scope
    attr_reader :devise, :scope

    def initialize(user, scope)
      @devise = devise
      @scope = scope
    end

    def resolve
      scope.all
    end
  end
end
