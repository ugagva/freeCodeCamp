function getMiddle(s){

    if (s.length % 2 == 1) {
        return s.substring((s.length / 2)+1, (s.length / 2))
    } else if (s.length % 2 == 0) {
        return s.substring((s.length / 2)-1, (s.length / 2)+1)
    }

}