package com.cric.apis.Servics;

import com.cric.apis.entities.Match;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

public interface MatchService {
    //    get all matches
    List<Match> getAllMatches();

    //get live matches
    List<Match> getLiveMatches();

//    get timetable

    List<List<String>>  getPointTable();
}
