package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmDongHoTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmDongHo.class);
        DmDongHo dmDongHo1 = new DmDongHo();
        dmDongHo1.setId(1L);
        DmDongHo dmDongHo2 = new DmDongHo();
        dmDongHo2.setId(dmDongHo1.getId());
        assertThat(dmDongHo1).isEqualTo(dmDongHo2);
        dmDongHo2.setId(2L);
        assertThat(dmDongHo1).isNotEqualTo(dmDongHo2);
        dmDongHo1.setId(null);
        assertThat(dmDongHo1).isNotEqualTo(dmDongHo2);
    }
}
