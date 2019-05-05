class Hero {
  final int id;
  String name;

  Hero(this.id, this.name);

  factory Hero.fromJson(Map<String, dynamic> hero) =>
      Hero(_toInt(hero['id']), hero['name']);

  Map toJson() => {'id': id, 'name': name};
}

int _toInt(id) => id is int ? id : int.parse(id);



class Powerzone {
  final int id;
  
  // Learn how to do setTimeout and stuff in dart
  var timer;

  Powerzone(this.id);

  void start() {

  }

  void delete() {
    timer.cancel();
  }

  void restart() {

  }
}